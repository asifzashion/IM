import { useReducer, useEffect } from "react";
import ProjectUtils from "../utilities/utils";
import NetworkManager, { getToken } from "../NetworkManager/NetworkManager";
import { toast } from "react-toastify";
import Router from "next/router";

const reducerCb = (state, action) => {
  const { payload, type } = action;
  let newState = {};
  switch (type) {
    case "SET_LOGIN_SUCCESS":
      const expireDate = payload.expireDate;
      newState = { ...state, ...payload, isGuest: false };
      break;
    case "SET_PROJECTS":
      newState = { ...state, ...payload };
      break;
    case "SET_SUBMITTALS":
      newState = { ...state, ...payload };
      break;
    case "SET_ASSIGNMENTS_NEW":
      newState = { ...state, ...payload };
      break;
    case "SET_OTDSTICKET":
      newState = { ...state, ...payload };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
};

export const helpersCreator = (state, cookie) => {
  return {};
};

const actionsCreator = (dispatch, state) => {
  const { cartValue } = state;
  const signIn = async (
    { email, password },
    successUrl = window.localStorage.getItem("successUrl") || "/"
  ) => {
    let expireDate;
    let postData = {
      username: email,
      password: password,
    };
    const { ticket } = await NetworkManager.postDataWithUrl(false)(
      ProjectUtils.makeReactLoginRequestURL(),
      { ...postData }
    );
    getTicket(email, password);
    if (ticket) {
      dispatch({
        type: "SET_LOGIN_SUCCESS",
        payload: { email, token: ticket },
      });
      Router.push("/dashboard", `/dashboard`);
      return { email };
    } else {
      // toast.error(message, {
      //     position: toast.POSITION.TOP_CENTER
      // });
    }
  };

  const getTicket = async (email, password) => {
    let postData = {
      userName: email,
      password: password,
    };
    const { ticket } = await NetworkManager.postDataWithUrl(true)(
      ProjectUtils.getOTDSTicket(),
      { ...postData }
    );
    dispatch({
      type: "SET_OTDSTICKET",
      payload: { otdsticket: ticket },
    });
    return;
  };

  const getProjects = async (token, email) => {
    const response = await NetworkManager.getDataWithUrl(token)(
      ProjectUtils.getProjectRequestURL(email)
    );
    dispatch({ type: "SET_PROJECTS", payload: { projects: response?.data } });
    return response;
  };

  const getSubmittals = async (token, contractId, draw, start, end) => {
    const response = await NetworkManager.getDataWithUrl(token)(
      ProjectUtils.getSubmittalsRequestURL(contractId, draw, start, end)
    );
    dispatch({
      type: "SET_SUBMITTALS",
      payload: { subProjects: response?.data },
    });
    return response;
  };

  const getAssignmentsNew = async (token, type, emailId, draw, start, end) => {
    dispatch({
      type: "SET_ASSIGNMENTS_NEW",
      payload: { assignments: [] },
    });
    const response = await NetworkManager.getDataWithUrl(token)(
      ProjectUtils.getAssignmentsNewURL(type, emailId, draw, start, end)
    );
    dispatch({
      type: "SET_ASSIGNMENTS_NEW",
      payload: { assignments: response?.data },
    });
    return response;
  };

  const uservValidation = async ({ email }) => {
    let postData = {
      email: email,
    };
    const response = await NetworkManager.getDataWithUrl(false)(
      ProjectUtils.makeUserValidationRequestURL(),
      { ...postData }
    );
    if (response) {
      Router.push("/changePassword", `/changePassword`);
      return { email };
    } else {
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return {
    signIn,
    uservValidation,
    getProjects,
    getSubmittals,
    getAssignmentsNew,
  };
};

export default function useAuthReducer(ctxReqHeaders) {
  const cookie = {}; //cookieFactory(ctxReqHeaders);
  const initialState = {};

  const [state, dispatch] = useReducer(reducerCb, initialState);
  const actions = actionsCreator(dispatch, state);

  return { state, actions, helpers: helpersCreator(state, cookie) };
}

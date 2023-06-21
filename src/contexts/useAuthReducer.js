import { useReducer, useEffect } from "react";
import ProjectUtils from "../utilities/utils";
import NetworkManager, { getToken } from "../NetworkManager/NetworkManager";
import { toast } from "react-toastify";
import Router from 'next/router'


const reducerCb = (state, action) => {
    const { payload, type } = action;
    let newState = {};
    switch (type) {
        case 'SET_LOGIN_SUCCESS':
            const expireDate = payload.expireDate;
            newState = {...state, ...payload, isGuest: false };
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};

export const helpersCreator = (state, cookie) => {

    return {}
};

const actionsCreator = (dispatch, state) => {
    const { cartValue } = state;
    const signIn = async({ email, password }, successUrl = window.localStorage.getItem('successUrl') || '/') => {
        let expireDate;
        let postData = {
            username: email,
            password: password
        }
        const { ticket } = await
        NetworkManager.postDataWithUrl(true)(ProjectUtils.makeReactLoginRequestURL(), {...postData });
        if (ticket) {

            dispatch({ type: 'SET_LOGIN_SUCCESS', payload: { email, ticket } });
            Router.push('/dashboard', `/dashboard`);
            return { email }
        } else {
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };
    return { signIn }
};


export default function useAuthReducer(ctxReqHeaders) {
    const cookie = {} //cookieFactory(ctxReqHeaders);
    const initialState = {

    };


    const [state, dispatch] = useReducer(reducerCb, initialState);
    const actions = actionsCreator(dispatch, state);



    return { state, actions, helpers: helpersCreator(state, cookie) };
}
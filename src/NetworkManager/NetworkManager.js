import axios from "axios";
import cookie from "js-cookie";
import jsCookie from "js-cookie";
import { toast } from "react-toastify";
import * as Constants from "../constants/constant";
import * as APIConstant from "../constants/APIConstant";
import Router from "next/router";
import { MAX_EXPIRY } from "../constants/constant";



let axiosInstance = axios.create({
  baseURL: process.env.CORS,
});

export const formatAxiosError = (err, url) => {
  let errorMessage = "unkwown-error";
  let statusCode = "unkwown-staus-code";
  let headers = [];
  if (err.response) {
    // The client was given an error response (5xx, 4xx)
    errorMessage = err.response.data;
    statusCode = err.response.status;
    headers = err.response.headers;
  } else if (err.request) {
    errorMessage = "Network issue";
  } else {
    errorMessage = err.message;
  }
  const response = {
    errorMessage,
    statusCode,
    headers,
    url,
  };
  console.log("Axios Error:", response);
  return response;
};
const requestHandler = (request) => request;

const successHandler = (response) => response;

const errorHandler = (error) => {
  const errorObj = {
    statusText:
      (error.response && error.response.data && error.response.data.message) ||
      (error.response && error.response.statusText) ||
      error.message ||
      "",
    status: (error.response && error.response.status) || "na",
  };
  if (error?.response?.data?.error) {
    let message;
    if (error.response.data.error === "Account currently locked.") {
      message =
        "Your account has been locked due to multiple failed attempts.It will be unlocked automatically after 5 minutes.";
    } else {
      message = error.response.data.error;
    }
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  } else if (
    error &&
    error.response &&
    error.response.config.url.indexOf("pre-score") > -1
  ) {
    return false;
  }
  // error for message "You cart has some issue, please correct it before proceeding"
  else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.result &&
    error.response.data.result.code &&
    error.response.data.status == "FAILED" &&
    (error.response.data.result.code == "1008" ||
      error.response.data.result.code == "1001" ||
      error.response.data.result.code == "1002" ||
      error.response.data.result.code == "1009")
  ) {
    toast.error(
      error.response.data.result.message || Constants.GENERIC_ERROR_MSG,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
    const preorderProduct =
      window &&
      window.sessionStorage &&
      window.sessionStorage.getItem("preorderFlow" == "true");
    if (preorderProduct) {
    } else {
      toast.error(
        error.response.data.result.message || Constants.GENERIC_ERROR_MSG,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      Router.push(
        "/checkout/cart",
        `${NetworkManager.getLangUrlPrefix()}/checkout/cart`
      );
    }
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.status &&
    error.response.data.status.httpStatusCode &&
    (error.response.data.status.httpStatusCode == "2002" ||
      error.response.data.status.httpStatusCode == "2005" ||
      error.response.data.status.httpStatusCode == "2007" ||
      error.response.data.status.httpStatusCode == "2003" ||
      error.response.data.status.httpStatusCode == "2000")
  ) {
    toast.error(
      error.response.data.status.message || Constants.GENERIC_ERROR_MSG,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.status &&
    error.response.data.status.httpStatusCode == "400" &&
    error.response.data.status.errors == "ProductIsDisabledException"
  ) {
    toast.error(
      error.response.data.status.message || Constants.GENERIC_ERROR_MSG,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } else {
    if (errorObj.statusText !== "Cart Identifier Generated !") {
      toast.error(errorObj.statusText || Constants.GENERIC_ERROR_MSG, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
  //console.log('API Error -> ', errorObj, '\n\n------------------', error.config, '------------------\n\n')
  //console.log('error', error.config)
  const data = error && error.response && error.response.data;
  return Promise.reject({
    message: errorObj.statusText,
    isError: true,
    errorObj,
    data,
  });
};

// Axios interceptors
axiosInstance && axiosInstance.interceptors.request.use(requestHandler);

axiosInstance &&
  axiosInstance.interceptors.response.use(successHandler, errorHandler);

/**
 * Isomorphic function make sure that token is available and not expired
 * Note: fetching "/V1/session/admin/token" is exclusive to backend since it uses secret apiUser and password
 * @param context
 * @returns {Promise<string|undefined|*|Promise<string|undefined|*>>}
 */
export const getToken = (context = null) => {
      return context;
};

class NetworkManager {
  static selected = {};
  static makeHeaderParam =
    (withToken = false) =>
    async (context = null, extraHeaders = {}) => {
      let token;
      if (withToken) {
        token = getToken(context);
      }
      const param = {
        platform: "web",
      };
      const config = {
        method: "GET",
        headers: {
          param: JSON.stringify(param),
          ...extraHeaders,
        },
      };
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    };
  static async makeTokenHeaderParam() {
    return {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  }
  static async makeGetTokenHeaderParam(token) {
    const config ={
        headers: {
          "Content-Type": "application/json",
        },
      };
     if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.OTCSTICKET = token;
      }
    return config;   
  }
  static postDataWithUrl =
    (withToken = false) =>
    async (url, params, callback = (a) => a) => {
      const header = await NetworkManager.makeTokenHeaderParam(null);
      return axiosInstance
        .post(url, params, header)
        .then((response) => {
          callback(response, null);
          return response && response.data;
        })
        .catch((error) => {
          callback(null, error);
          return error;
        });
    };
  static getDataWithUrl =
    (token = '') =>
    async (url, context = null, extraHeaders = {}) => {
    // url = url + "&userID=" + context.email;
      const headers = await NetworkManager.makeGetTokenHeaderParam(token);
      const response = await axiosInstance.get(url, headers);
      return response.data;
    };

    
}
export const createPlusAxiosReq = (endpoint, baseUrl) => {
  let url;
  const getHeader = () => NetworkManager.makeHeaderParamWishList();
  const setUrl = (endpointUrl) =>
    (url = `${window.CORS_URL}${baseUrl}${
      endpointUrl ? "/" + endpointUrl : ""
    }`);
  const withQs =
    (url) =>
    (params = {}) => {
      const qsString = Object.keys(params)
        .filter((k) => !!params[k])
        .map((k) => `${k}=${params[k]}`)
        .join("&");
      const sep = url.indexOf("?") > -1 ? "&" : "?";
      return `${url}${sep}${qsString}`;
    };

  const get = async (params) => {
    const headers = NetworkManager.getCustomerID() ? await getHeader() : {};
    const response = await axios
      .get(withQs(url)(params), headers)
      .catch(errorHandler);
    return response.data;
  };

  const del = async (params) => {
    const headers = await getHeader();
    const response = await axios
      .delete(withQs(url)(params), headers)
      .catch(errorHandler);
    return response.data;
  };

  const post = async (bodyData, returned = "data") => {
    let headers = await getHeader();
    const response = await axios
      .post(url, bodyData, headers)
      .catch(errorHandler);
    return returned === "data" ? response.data : response.status === 200;
  };

  const put = async (bodyData) => {
    const headers = await getHeader();
    const response = await axios
      .put(url, bodyData, headers)
      .catch(errorHandler);
    return response.data;
  };
  const postCoupn = async (bodyData, returned = "data") => {
    let headers = await getHeader();
    const response = await axios
      .post(setUrl(endpoint), {}, headers)
      .catch(errorHandler);
    return returned === "data" ? response.data : response.status === 200;
  };
  const delCoupn = async () => {
    const headers = await getHeader();
    const response = await axios
      .delete(setUrl(endpoint), headers)
      .catch(errorHandler);
    return response.data;
  };
  setUrl(endpoint);

  return {
    setUrl,
    get,
    post,
    del,
    put,
    postCoupn,
    delCoupn,
  };
};

export default NetworkManager;

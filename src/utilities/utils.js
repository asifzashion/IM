import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import * as APIConstant from '../constants/APIConstant';
import * as Constants from '../constants/constant';
import NetworkManager from '../NetworkManager/NetworkManager';


/**
 * @param path
 * @param params
 * @param ctx
 * @returns {string}
 * @description replace paths with format path/to/:param1:/param2
 */


class ProjectUtils {

    static makeReactLoginRequestURL() {
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.POST_LOGIN}`;
    }
    static makeUserValidationRequestURL() {
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GETUSER_VALIDATION}`;
    }
    static makeResetPasswordRequestURL() {
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.POST_LOGIN}`;
    }
    static getProjectRequestURL(email) {
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GET_PROJECTS}&userID=${email}`;
    }
    static getSubmittalsRequestURL(ContractDataID) {
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GET_SUBMITTALS}&ContractDataID=${ContractDataID}`;
    }
    static getAssignmentsNewURL(type,emailId) {
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GET_ASSIGNMENTS_NEW}&emaildid=${emailId}${type}`;
    }
}

export default ProjectUtils;
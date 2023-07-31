import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import * as APIConstant from '../constants/APIConstant';
import * as Constants from '../constants/constant';
import NetworkManager from '../NetworkManager/NetworkManager';
import { ContractDataID } from '../NetworkManager/NetworkManager';

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
        const email_id = window.sessionStorage.getItem('email')
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GET_PROJECTS}&userID=${email_id}`;
    }
    static getSubmittalsRequestURL(ContractDataIDDD, draw, start, end) {
        console.log(window.sessionStorage.getItem('token'))
        console.log("dddddd session", sessionStorage.getItem('token'))
        const cid = sessionStorage.getItem('token');
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GET_SUBMITTALS}&ContractDataID=${cid}&draw=${draw}&start=${start}&length=${end}`;
    }
    static getAssignmentsNewURL(type, emailId, draw, start, end) {
        const email_id = window.sessionStorage.getItem('email')
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GET_ASSIGNMENTS_NEW}&emaildid=${email_id}&draw=${draw}&start=${start}&length=${end}${type}`;
    }
    static getMyassignmentData(payload, otdsticket) {
        return `${process.env.BASE_LOCATION}${APIConstant.GET_MYASSIGNMENT}/${payload[0]}/${payload[1]}/${payload[2]}?otdsticket=${otdsticket}&nexturl=%2Fotcs%2Fllisapi.dll%3Ffunc%3Dll%26objId%26objAction%3DRunReport`;
    }
    static getOTDSTicket() {
        return `${window.CORS_URL}${process.env.BASE_LOCATION}${APIConstant.GET_OTDSTICKET}`;
    }
}

export default ProjectUtils;
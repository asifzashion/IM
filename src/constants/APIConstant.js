if (typeof window !== 'undefined') {
    const needsProxy = window.location.host.indexOf(':3000') > -1
    window.CORS_URL = needsProxy ? '/local-proxy/' : '';
}
// Generic API endpoints
export const POST_LOGIN = '/otcs/llisapi.dll/api/v1/auth';
export const GETUSER_VALIDATION = '/IMService/checkUser';
export const POSTUSER_RESET = '/IMService/resetPassword';
export const GET_PROJECTS = '/otcs/llisapi.dll/api/v1/nodes/116934938/output?format=webreport&draw=1';
export const GET_SUBMITTALS = '/otcs/llisapi.dll/api/v1/nodes/116895788/output?format=webreport';
export const GET_ASSIGNMENTS_NEW = '/otcs/llisapi.dll/api/v1/nodes/117635803/output?format=webreport';
export const GET_OTDSTICKET = '/otdsws/rest/authentication/credentials';
export const GET_MYASSIGNMENT = '/otcs/llisapi.dll/app/processes';

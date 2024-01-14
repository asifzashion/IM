if (typeof window !== 'undefined') {
    const needsProxy = window.location.host.indexOf(':3000') > -1
    window.CORS_URL = needsProxy ? '/local-proxy/' : '';
}
// Generic API endpoints
export const POST_LOGIN = '/otcs/llisapi.dll/api/v1/auth';
export const GETUSER_VALIDATION = '/IMService/checkUser';
export const POSTUSER_RESET = '/IMService/resetPassword';
export const GET_PROJECTS = '/otcs/llisapi.dll/api/v1/nodes/123994320/output?format=webreport&draw=1';
export const GET_SUBMITTALS = '/otcs/llisapi.dll/api/v1/nodes/124024553/output?format=webreport';
// export const GET_ASSIGNMENTS_NEW = '/otcs/llisapi.dll/api/v1/nodes/117635803/output?format=webreport';
export const GET_ASSIGNMENTS_NEW = '/otcs/llisapi.dll/api/v1/nodes/124055540/output?format=webreport';
export const GET_OTDSTICKET = 'https://tempouat.ashghal.gov.qa/otdsws/rest/authentication/credentials';

export const GET_AUDIT = '/otcs/llisapi.dll/api/v1/nodes/124159144/output?format=webreport';

export const GET_AUDITDETAILS = '/otcs/llisapi.dll/api/v1/nodes/124153625/output?format=webreport&workid=124053290&DNOMSVer1=true&WFTYPE=DNOMSVer1';


export const GET_MYASSIGNMENT = '/otcs/llisapi.dll/app/processes';
export const SUBMIT_TO_METADATA = '/otcs/llisapi.dll/api/v1/nodes/118712925/output?format=webreport';
export const SUBMIT_TO_COUNT = '/otcs/llisapi.dll/api/v1/nodes/124108087/output?format=webreport';
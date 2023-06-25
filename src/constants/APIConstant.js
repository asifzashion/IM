if (typeof window !== 'undefined') {
    const needsProxy = window.location.host.indexOf(':3000') > -1
    window.CORS_URL = needsProxy ? '/local-proxy/' : '';
}
// Generic API endpoints
export const POST_LOGIN = '/otcs/llisapi.dll/api/v1/auth';
export const GETUSER_VALIDATION = '/IMService/checkUser';
export const POSTUSER_RESET = '/IMService/resetPassword';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/constants/APIConstant.js":
/*!**************************************!*\
  !*** ./src/constants/APIConstant.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"POST_LOGIN\": function() { return /* binding */ POST_LOGIN; },\n/* harmony export */   \"GETUSER_VALIDATION\": function() { return /* binding */ GETUSER_VALIDATION; },\n/* harmony export */   \"POSTUSER_RESET\": function() { return /* binding */ POSTUSER_RESET; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nif (true) {\n  var needsProxy = window.location.host.indexOf(':3000') > -1;\n  window.CORS_URL = needsProxy ? '/local-proxy/' : '';\n} // Generic API endpoints\n\n\nvar POST_LOGIN = '/otcs/llisapi.dll/api/v1/auth';\nvar GETUSER_VALIDATION = '/IMService/checkUser';\nvar POSTUSER_RESET = '/IMService/resetPassword';\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9BUElDb25zdGFudC5qcz8yYjliIl0sIm5hbWVzIjpbIm5lZWRzUHJveHkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJpbmRleE9mIiwiQ09SU19VUkwiLCJQT1NUX0xPR0lOIiwiR0VUVVNFUl9WQUxJREFUSU9OIiwiUE9TVFVTRVJfUkVTRVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJLE1BQStCO0FBQy9CLE1BQU1BLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsT0FBckIsQ0FBNkIsT0FBN0IsSUFBd0MsQ0FBQyxDQUE1RDtBQUNBSCxRQUFNLENBQUNJLFFBQVAsR0FBa0JMLFVBQVUsR0FBRyxlQUFILEdBQXFCLEVBQWpEO0FBQ0gsQyxDQUNEOzs7QUFDTyxJQUFNTSxVQUFVLEdBQUcsK0JBQW5CO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsc0JBQTNCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLDBCQUF2QiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMvQVBJQ29uc3RhbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBuZWVkc1Byb3h5ID0gd2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZignOjMwMDAnKSA+IC0xXG4gICAgd2luZG93LkNPUlNfVVJMID0gbmVlZHNQcm94eSA/ICcvbG9jYWwtcHJveHkvJyA6ICcnO1xufVxuLy8gR2VuZXJpYyBBUEkgZW5kcG9pbnRzXG5leHBvcnQgY29uc3QgUE9TVF9MT0dJTiA9ICcvb3Rjcy9sbGlzYXBpLmRsbC9hcGkvdjEvYXV0aCc7XG5leHBvcnQgY29uc3QgR0VUVVNFUl9WQUxJREFUSU9OID0gJy9JTVNlcnZpY2UvY2hlY2tVc2VyJztcbmV4cG9ydCBjb25zdCBQT1NUVVNFUl9SRVNFVCA9ICcvSU1TZXJ2aWNlL3Jlc2V0UGFzc3dvcmQnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/APIConstant.js\n");

/***/ })

});
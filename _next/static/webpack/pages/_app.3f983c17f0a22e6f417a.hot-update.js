/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/useAuthReducer.js":
/*!****************************************!*\
  !*** ./src/contexts/useAuthReducer.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"helpersCreator\": function() { return /* binding */ helpersCreator; },\n/* harmony export */   \"default\": function() { return /* binding */ useAuthReducer; }\n/* harmony export */ });\n/* harmony import */ var _Users_chandra_Documents_im_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_chandra_Documents_im_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chandra_Documents_im_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_chandra_Documents_im_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_chandra_Documents_im_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utilities_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/utils */ \"./src/utilities/utils.js\");\n/* harmony import */ var _NetworkManager_NetworkManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NetworkManager/NetworkManager */ \"./src/NetworkManager/NetworkManager.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_chandra_Documents_im_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar reducerCb = function reducerCb(state, action) {\n  var payload = action.payload,\n      type = action.type;\n  var newState = {};\n\n  switch (type) {\n    case 'SET_LOGIN_SUCCESS':\n      var expireDate = payload.expireDate;\n      newState = _objectSpread(_objectSpread(_objectSpread({}, state), payload), {}, {\n        isGuest: false\n      });\n      break;\n\n    default:\n      newState = state;\n      break;\n  }\n\n  return newState;\n};\n\nvar helpersCreator = function helpersCreator(state, cookie) {\n  return {};\n};\n\nvar actionsCreator = function actionsCreator(dispatch, state) {\n  var cartValue = state.cartValue;\n\n  var signIn = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_chandra_Documents_im_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_chandra_Documents_im_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {\n      var email,\n          password,\n          successUrl,\n          expireDate,\n          postData,\n          _yield$NetworkManager,\n          ticket,\n          _args = arguments;\n\n      return _Users_chandra_Documents_im_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              email = _ref.email, password = _ref.password;\n              successUrl = _args.length > 1 && _args[1] !== undefined ? _args[1] : window.localStorage.getItem('successUrl') || '/';\n              postData = {\n                username: email,\n                password: password\n              };\n              _context.next = 5;\n              return _NetworkManager_NetworkManager__WEBPACK_IMPORTED_MODULE_5__.default.postDataWithUrl(true)(_utilities_utils__WEBPACK_IMPORTED_MODULE_4__.default.makeReactLoginRequestURL(), _objectSpread({}, postData));\n\n            case 5:\n              _yield$NetworkManager = _context.sent;\n              ticket = _yield$NetworkManager.ticket;\n\n              if (!ticket) {\n                _context.next = 13;\n                break;\n              }\n\n              dispatch({\n                type: 'SET_LOGIN_SUCCESS',\n                payload: {\n                  email: email,\n                  ticket: ticket\n                }\n              });\n              next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/dashboard', \"/dashboard\");\n              return _context.abrupt(\"return\", {\n                email: email\n              });\n\n            case 13:\n              react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(message, {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER\n              });\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function signIn(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var uservValidation = /*#__PURE__*/function () {\n    var _ref4 = (0,_Users_chandra_Documents_im_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_chandra_Documents_im_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref3) {\n      var email, postData, _yield$NetworkManager2, ticket;\n\n      return _Users_chandra_Documents_im_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              email = _ref3.email;\n              postData = {\n                username: email\n              };\n              _context2.next = 4;\n              return _NetworkManager_NetworkManager__WEBPACK_IMPORTED_MODULE_5__.default.getDataWithUrl(false)(_utilities_utils__WEBPACK_IMPORTED_MODULE_4__.default.makeUserValidationRequestURL(), _objectSpread({}, postData));\n\n            case 4:\n              _yield$NetworkManager2 = _context2.sent;\n              ticket = _yield$NetworkManager2.ticket;\n\n              if (!ticket) {\n                _context2.next = 12;\n                break;\n              }\n\n              dispatch({\n                type: 'SET_LOGIN_SUCCESS',\n                payload: {\n                  email: email,\n                  ticket: ticket\n                }\n              });\n              next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/dashboard', \"/dashboard\");\n              return _context2.abrupt(\"return\", {\n                email: email\n              });\n\n            case 12:\n              react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(message, {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_CENTER\n              });\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function uservValidation(_x2) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  return {\n    signIn: signIn,\n    uservValidation: uservValidation\n  };\n};\n\nfunction useAuthReducer(ctxReqHeaders) {\n  _s();\n\n  var cookie = {}; //cookieFactory(ctxReqHeaders);\n\n  var initialState = {};\n\n  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(reducerCb, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var actions = actionsCreator(dispatch, state);\n  return {\n    state: state,\n    actions: actions,\n    helpers: helpersCreator(state, cookie)\n  };\n}\n\n_s(useAuthReducer, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL3VzZUF1dGhSZWR1Y2VyLmpzPzAxOGYiXSwibmFtZXMiOlsicmVkdWNlckNiIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwidHlwZSIsIm5ld1N0YXRlIiwiZXhwaXJlRGF0ZSIsImlzR3Vlc3QiLCJoZWxwZXJzQ3JlYXRvciIsImNvb2tpZSIsImFjdGlvbnNDcmVhdG9yIiwiZGlzcGF0Y2giLCJjYXJ0VmFsdWUiLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwic3VjY2Vzc1VybCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0RGF0YSIsInVzZXJuYW1lIiwiTmV0d29ya01hbmFnZXIiLCJQcm9qZWN0VXRpbHMiLCJ0aWNrZXQiLCJSb3V0ZXIiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsIlRPUF9DRU5URVIiLCJ1c2VydlZhbGlkYXRpb24iLCJ1c2VBdXRoUmVkdWNlciIsImN0eFJlcUhlYWRlcnMiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiYWN0aW9ucyIsImhlbHBlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsTUFDekJDLE9BRHlCLEdBQ1BELE1BRE8sQ0FDekJDLE9BRHlCO0FBQUEsTUFDaEJDLElBRGdCLEdBQ1BGLE1BRE8sQ0FDaEJFLElBRGdCO0FBRWpDLE1BQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFVBQVFELElBQVI7QUFDSSxTQUFLLG1CQUFMO0FBQ0ksVUFBTUUsVUFBVSxHQUFHSCxPQUFPLENBQUNHLFVBQTNCO0FBQ0FELGNBQVEsaURBQU9KLEtBQVAsR0FBaUJFLE9BQWpCO0FBQTBCSSxlQUFPLEVBQUU7QUFBbkMsUUFBUjtBQUNB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LFlBQVksR0FBRyxFQUFyQjs7QUFGa0Qsb0JBT3hCQyxpREFBVSxDQUFDbEMsU0FBRCxFQUFZaUMsWUFBWixDQVBjO0FBQUEsTUFPM0NoQyxLQVAyQztBQUFBLE1BT3BDVSxRQVBvQzs7QUFRbEQsTUFBTXdCLE9BQU8sR0FBR3pCLGNBQWMsQ0FBQ0MsUUFBRCxFQUFXVixLQUFYLENBQTlCO0FBSUEsU0FBTztBQUFFQSxTQUFLLEVBQUxBLEtBQUY7QUFBU2tDLFdBQU8sRUFBUEEsT0FBVDtBQUFrQkMsV0FBTyxFQUFFNUIsY0FBYyxDQUFDUCxLQUFELEVBQVFRLE1BQVI7QUFBekMsR0FBUDtBQUNIOztHQWJ1QnNCLGMiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlQXV0aFJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9qZWN0VXRpbHMgZnJvbSBcIi4uL3V0aWxpdGllcy91dGlsc1wiO1xuaW1wb3J0IE5ldHdvcmtNYW5hZ2VyLCB7IGdldFRva2VuIH0gZnJvbSBcIi4uL05ldHdvcmtNYW5hZ2VyL05ldHdvcmtNYW5hZ2VyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jb25zdCByZWR1Y2VyQ2IgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgcGF5bG9hZCwgdHlwZSB9ID0gYWN0aW9uO1xuICAgIGxldCBuZXdTdGF0ZSA9IHt9O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfTE9HSU5fU1VDQ0VTUyc6XG4gICAgICAgICAgICBjb25zdCBleHBpcmVEYXRlID0gcGF5bG9hZC5leHBpcmVEYXRlO1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB7Li4uc3RhdGUsIC4uLnBheWxvYWQsIGlzR3Vlc3Q6IGZhbHNlIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIG5ld1N0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGhlbHBlcnNDcmVhdG9yID0gKHN0YXRlLCBjb29raWUpID0+IHtcblxuICAgIHJldHVybiB7fVxufTtcblxuY29uc3QgYWN0aW9uc0NyZWF0b3IgPSAoZGlzcGF0Y2gsIHN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyBjYXJ0VmFsdWUgfSA9IHN0YXRlO1xuICAgIGNvbnN0IHNpZ25JbiA9IGFzeW5jKHsgZW1haWwsIHBhc3N3b3JkIH0sIHN1Y2Nlc3NVcmwgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Y2Nlc3NVcmwnKSB8fCAnLycpID0+IHtcbiAgICAgICAgbGV0IGV4cGlyZURhdGU7XG4gICAgICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdGlja2V0IH0gPSBhd2FpdFxuICAgICAgICBOZXR3b3JrTWFuYWdlci5wb3N0RGF0YVdpdGhVcmwodHJ1ZSkoUHJvamVjdFV0aWxzLm1ha2VSZWFjdExvZ2luUmVxdWVzdFVSTCgpLCB7Li4ucG9zdERhdGEgfSk7XG4gICAgICAgIGlmICh0aWNrZXQpIHtcblxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0xPR0lOX1NVQ0NFU1MnLCBwYXlsb2FkOiB7IGVtYWlsLCB0aWNrZXQgfSB9KTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJywgYC9kYXNoYm9hcmRgKTtcbiAgICAgICAgICAgIHJldHVybiB7IGVtYWlsIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0NFTlRFUlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHVzZXJ2VmFsaWRhdGlvbiA9IGFzeW5jICh7IGVtYWlsIH0pID0+IHtcbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IGVtYWlsLFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdGlja2V0IH0gPSBhd2FpdFxuICAgICAgICAgICAgTmV0d29ya01hbmFnZXIuZ2V0RGF0YVdpdGhVcmwoZmFsc2UpKFByb2plY3RVdGlscy5tYWtlVXNlclZhbGlkYXRpb25SZXF1ZXN0VVJMKCksIHsgLi4ucG9zdERhdGEgfSk7XG4gICAgICAgIGlmICh0aWNrZXQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9MT0dJTl9TVUNDRVNTJywgcGF5bG9hZDogeyBlbWFpbCwgdGlja2V0IH0gfSk7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcsIGAvZGFzaGJvYXJkYCk7XG4gICAgICAgICAgICByZXR1cm4geyBlbWFpbCB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9DRU5URVJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4geyBzaWduSW4sdXNlcnZWYWxpZGF0aW9uIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aFJlZHVjZXIoY3R4UmVxSGVhZGVycykge1xuICAgIGNvbnN0IGNvb2tpZSA9IHt9IC8vY29va2llRmFjdG9yeShjdHhSZXFIZWFkZXJzKTtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cbiAgICB9O1xuXG5cbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlckNiLCBpbml0aWFsU3RhdGUpO1xuICAgIGNvbnN0IGFjdGlvbnMgPSBhY3Rpb25zQ3JlYXRvcihkaXNwYXRjaCwgc3RhdGUpO1xuXG5cblxuICAgIHJldHVybiB7IHN0YXRlLCBhY3Rpb25zLCBoZWxwZXJzOiBoZWxwZXJzQ3JlYXRvcihzdGF0ZSwgY29va2llKSB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/useAuthReducer.js\n");

/***/ })

});
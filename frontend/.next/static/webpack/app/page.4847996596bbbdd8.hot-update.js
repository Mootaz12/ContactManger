"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/SignupButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/SignupButton.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst SignupButton = (param)=>{\n    let { setIsLoggedIn } = param;\n    var _s = $RefreshSig$();\n    const handleClick = ()=>{\n        _s();\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        if (pathname === \"/signup\") {\n            setIsLoggedIn((prev)=>true);\n            router.replace(\"/profile\");\n        } else {\n            router.replace(\"/signup\");\n        }\n    };\n    _s(handleClick, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-green-500 px-2 py-1 rounded-md hover:bg-green-500 hover:text-white transition duration-300\",\n        onClick: handleClick,\n        children: \"Sign Up\"\n    }, void 0, false, {\n        fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\SignupButton.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SignupButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupButton);\nvar _c;\n$RefreshReg$(_c, \"SignupButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZ251cEJ1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN3QztBQUNkO0FBRTFCLE1BQU1FLGVBQWU7UUFBQyxFQUFFQyxhQUFhLEVBQUU7O0lBQ3JDLE1BQU1DLGNBQWM7O1FBQ2xCLE1BQU1DLFNBQVNMLHNEQUFTQTtRQUN4QixJQUFJTSxhQUFhLFdBQVc7WUFDMUJILGNBQWMsQ0FBQ0ksT0FBUztZQUN4QkYsT0FBT0csT0FBTyxDQUFDO1FBQ2pCLE9BQU87WUFDTEgsT0FBT0csT0FBTyxDQUFDO1FBQ2pCO0lBQ0Y7T0FSTUo7O1lBQ1dKLGtEQUFTQTs7O0lBUTFCLHFCQUNFLDhEQUFDUztRQUNDQyxXQUFVO1FBQ1ZDLFNBQVNQO2tCQUNWOzs7Ozs7QUFJTDtLQWxCTUY7QUFvQk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lnbnVwQnV0dG9uLmpzeD85ZGE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2lnbnVwQnV0dG9uID0gKHsgc2V0SXNMb2dnZWRJbiB9KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gXCIvc2lnbnVwXCIpIHtcclxuICAgICAgc2V0SXNMb2dnZWRJbigocHJldikgPT4gdHJ1ZSk7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL3Byb2ZpbGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9zaWdudXBcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyZWVuLTUwMCBweC0yIHB5LTEgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmVlbi01MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgPlxyXG4gICAgICBTaWduIFVwXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwQnV0dG9uO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJTaWdudXBCdXR0b24iLCJzZXRJc0xvZ2dlZEluIiwiaGFuZGxlQ2xpY2siLCJyb3V0ZXIiLCJwYXRobmFtZSIsInByZXYiLCJyZXBsYWNlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SignupButton.jsx\n"));

/***/ })

});
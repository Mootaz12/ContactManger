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

/***/ "(app-pages-browser)/./src/components/SigninButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/SigninButton.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst SigninButton = (param)=>{\n    let { setIsLoggedIn } = param;\n    var _s = $RefreshSig$();\n    const handleClick = ()=>{\n        _s();\n        //   const router = useRouter();\n        const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n        if (pathname === \"/signin\") {\n            console.log(\"gg\");\n        //           setIsLoggedIn((prev) => true);\n        //     router.replace(\"/profile\");\n        //         } else {\n        //           return;\n        }\n    };\n    _s(handleClick, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n        return [\n            next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n        ];\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-blue-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white transition duration-300\",\n        onClick: handleClick,\n        children: \"Sign In\"\n    }, void 0, false, {\n        fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\SigninButton.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SigninButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SigninButton);\nvar _c;\n$RefreshReg$(_c, \"SigninButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZ25pbkJ1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzZCO0FBQ0g7QUFDK0I7QUFDekQsTUFBTUksZUFBZTtRQUFDLEVBQUVDLGFBQWEsRUFBRTs7SUFDckMsTUFBTUMsY0FBYzs7UUFDbEIsZ0NBQWdDO1FBQ2hDLE1BQU1DLFdBQVdKLDREQUFXQTtRQUM1QixJQUFJSSxhQUFhLFdBQVc7WUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLDJDQUEyQztRQUMzQyxrQ0FBa0M7UUFDbEMsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUN0QjtJQUNGO09BVk1IOztZQUVhSCx3REFBV0E7OztJQVU5QixxQkFDRSw4REFBQ087UUFDQ0MsV0FBVTtRQUNWQyxTQUFTTjtrQkFDVjs7Ozs7O0FBSUw7S0FyQk1GO0FBdUJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZ25pbkJ1dHRvbi5qc3g/MWJmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmNvbnN0IFNpZ25pbkJ1dHRvbiA9ICh7IHNldElzTG9nZ2VkSW4gfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gXCIvc2lnbmluXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJnZ1wiKTtcclxuICAgICAgLy8gICAgICAgICAgIHNldElzTG9nZ2VkSW4oKHByZXYpID0+IHRydWUpO1xyXG4gICAgICAvLyAgICAgcm91dGVyLnJlcGxhY2UoXCIvcHJvZmlsZVwiKTtcclxuICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmx1ZS01MDAgcHgtMiBweS0xIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS01MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgPlxyXG4gICAgICBTaWduIEluXHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluQnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlUm91dGVyIiwidXNlUGF0aG5hbWUiLCJTaWduaW5CdXR0b24iLCJzZXRJc0xvZ2dlZEluIiwiaGFuZGxlQ2xpY2siLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SigninButton.jsx\n"));

/***/ })

});
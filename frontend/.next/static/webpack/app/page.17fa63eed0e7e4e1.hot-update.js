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

/***/ "(app-pages-browser)/./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ \"(app-pages-browser)/./src/components/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(flase);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"bg-gray-900 text-white py-5 px-10 flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"text-2xl font-bold\",\n                    children: \"ContactManager\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex space-x-4 items-center  justify-evenly\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"hover:text-gray-300\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/addContact\",\n                                className: \"hover:text-gray-300\",\n                                children: \"Add Contact\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/profile\",\n                                className: \"hover:text-gray-300\",\n                                children: \"profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.SignupButton, {\n                                        isLoggedIn: isLoggedIn,\n                                        setIsLoggedIn: setIsLoggedIn\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.SigninButton, {\n                                        isLoggedIn: isLoggedIn,\n                                        setIsLoggedIn: setIsLoggedIn\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_3__.SignoutButton, {\n                                isLoggedIn: isLoggedIn,\n                                setIsLoggedIn: setIsLoggedIn\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects\\\\contact-manger\\\\src\\\\components\\\\Navbar.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"+CdJJwDixmwzzBRQCG76Eft9nOc=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ1g7QUFDaUM7QUFFOUQsTUFBTU0sU0FBUzs7SUFDYixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUNRO0lBRTdDLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNWLGtEQUFJQTtvQkFBQ1csTUFBSztvQkFBSUQsV0FBVTs4QkFBcUI7Ozs7Ozs4QkFHOUMsOERBQUNFO29CQUFHRixXQUFVOztzQ0FDWiw4REFBQ0c7c0NBQ0MsNEVBQUNiLGtEQUFJQTtnQ0FBQ1csTUFBSztnQ0FBSUQsV0FBVTswQ0FBc0I7Ozs7Ozs7Ozs7O3NDQUlqRCw4REFBQ0c7c0NBQ0MsNEVBQUNiLGtEQUFJQTtnQ0FBQ1csTUFBSztnQ0FBY0QsV0FBVTswQ0FBc0I7Ozs7Ozs7Ozs7O3NDQUkzRCw4REFBQ0c7c0NBQ0VSLDJCQUNDLDhEQUFDTCxrREFBSUE7Z0NBQUNXLE1BQUs7Z0NBQVdELFdBQVU7MENBQXNCOzs7OzswREFJdEQsOERBQUNJOzBDQUFLOzs7Ozs7Ozs7OztzQ0FHViw4REFBQ0Q7c0NBQ0UsQ0FBQ1IsMkJBQ0EsOERBQUNVO2dDQUFJTCxXQUFVOztrREFDYiw4REFBQ1AsMkNBQVlBO3dDQUNYRSxZQUFZQTt3Q0FDWkMsZUFBZUE7Ozs7OztrREFFakIsOERBQUNKLDJDQUFZQTt3Q0FDWEcsWUFBWUE7d0NBQ1pDLGVBQWVBOzs7Ozs7Ozs7OzswREFJbkIsOERBQUNMLDRDQUFhQTtnQ0FDWkksWUFBWUE7Z0NBQ1pDLGVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9CO0dBcERNRjtLQUFBQTtBQXNETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanN4PzkwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFNpZ25vdXRCdXR0b24sIFNpZ25pbkJ1dHRvbiwgU2lnbnVwQnV0dG9uIH0gZnJvbSBcIi5cIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmbGFzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHRleHQtd2hpdGUgcHktNSBweC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgQ29udGFjdE1hbmFnZXJcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IGl0ZW1zLWNlbnRlciAganVzdGlmeS1ldmVubHlcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkZENvbnRhY3RcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgQWRkIENvbnRhY3RcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8c3Bhbj5wcm9maWxlPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgeyFpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICAgIDxTaWdudXBCdXR0b25cclxuICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn1cclxuICAgICAgICAgICAgICAgICAgc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U2lnbmluQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59XHJcbiAgICAgICAgICAgICAgICAgIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxTaWdub3V0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufVxyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIlNpZ25vdXRCdXR0b24iLCJTaWduaW5CdXR0b24iLCJTaWdudXBCdXR0b24iLCJOYXZiYXIiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImZsYXNlIiwiaGVhZGVyIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInVsIiwibGkiLCJzcGFuIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.jsx\n"));

/***/ })

});
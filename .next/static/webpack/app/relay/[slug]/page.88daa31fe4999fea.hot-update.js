"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/relay/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/TablesContacts.jsx":
/*!*******************************************!*\
  !*** ./src/components/TablesContacts.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TablesContacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/table */ \"(app-pages-browser)/./src/components/ui/table.jsx\");\n\n\nfunction TablesContacts(param) {\n    let { contacts } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.Table, {\n            className: \"font-primary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                className: \"w-[50px] font-bold\",\n                                children: \"Kontakt\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                className: \"font-bold\",\n                                children: \"Ort\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                className: \"font-bold\",\n                                children: \"Zweck\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableHead, {\n                                className: \"font-bold\",\n                                children: \"Kontakt schlie\\xdft nicht\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableBody, {\n                    children: contacts.map((contact)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableRow, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    className: \"font-medium\",\n                                    children: contact.kontakt_id\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    className: \"\",\n                                    children: contact.ortASB || \"-\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    className: \"\",\n                                    children: contact.zweck\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__.TableCell, {\n                                    className: \"\",\n                                    children: contact.kontaktSchliestNicht || \"-\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, contact.kontakt_id, true, {\n                            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\TablesContacts.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = TablesContacts;\nvar _c;\n$RefreshReg$(_c, \"TablesContacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhYmxlc0NvbnRhY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTzhCO0FBRWYsU0FBU00sZUFBZSxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFDbkMscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDUix1REFBS0E7WUFBQ1MsV0FBVTs7OEJBRWIsOERBQUNMLDZEQUFXQTs4QkFDUiw0RUFBQ0MsMERBQVFBOzswQ0FDTCw4REFBQ0YsMkRBQVNBO2dDQUFDTSxXQUFVOzBDQUFxQjs7Ozs7OzBDQUMxQyw4REFBQ04sMkRBQVNBO2dDQUFDTSxXQUFVOzBDQUFZOzs7Ozs7MENBQ2pDLDhEQUFDTiwyREFBU0E7Z0NBQUNNLFdBQVU7MENBQVk7Ozs7OzswQ0FDakMsOERBQUNOLDJEQUFTQTtnQ0FBQ00sV0FBVTswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3pDLDhEQUFDUiwyREFBU0E7OEJBQ0xNLFNBQVNHLEdBQUcsQ0FBQ0MsQ0FBQUEsd0JBQ1YsOERBQUNOLDBEQUFRQTs7OENBQ0wsOERBQUNILDJEQUFTQTtvQ0FBQ08sV0FBVTs4Q0FBZUUsUUFBUUMsVUFBVTs7Ozs7OzhDQUN0RCw4REFBQ1YsMkRBQVNBO29DQUFDTyxXQUFVOzhDQUFJRSxRQUFRRSxNQUFNLElBQUk7Ozs7Ozs4Q0FDM0MsOERBQUNYLDJEQUFTQTtvQ0FBQ08sV0FBVTs4Q0FBSUUsUUFBUUcsS0FBSzs7Ozs7OzhDQUN0Qyw4REFBQ1osMkRBQVNBO29DQUFDTyxXQUFVOzhDQUFJRSxRQUFRSSxvQkFBb0IsSUFBSTs7Ozs7OzsyQkFKOUNKLFFBQVFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd6RDtLQTFCd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RhYmxlc0NvbnRhY3RzLmpzeD8wY2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGFibGUsXG4gICAgVGFibGVCb2R5LFxuICAgIFRhYmxlQ2VsbCxcbiAgICBUYWJsZUhlYWQsXG4gICAgVGFibGVIZWFkZXIsXG4gICAgVGFibGVSb3dcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlc0NvbnRhY3RzKHsgY29udGFjdHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPVwiZm9udC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgey8qIDxUYWJsZUNhcHRpb24+QSBsaXN0IG9mIHlvdXIgcmVjZW50IGludm9pY2VzLjwvVGFibGVDYXB0aW9uPiAqL31cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwidy1bNTBweF0gZm9udC1ib2xkXCI+S29udGFrdDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5PcnQ8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+WndlY2s8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+S29udGFrdCBzY2hsaWXDn3QgbmljaHQ8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtjb250YWN0cy5tYXAoY29udGFjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtjb250YWN0LmtvbnRha3RfaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57Y29udGFjdC5rb250YWt0X2lkfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwiXCI+e2NvbnRhY3Qub3J0QVNCIHx8ICctJ308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cIlwiPntjb250YWN0Lnp3ZWNrfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwiXCI+e2NvbnRhY3Qua29udGFrdFNjaGxpZXN0TmljaHQgfHwgJy0nfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93IiwiVGFibGVzQ29udGFjdHMiLCJjb250YWN0cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNvbnRhY3QiLCJrb250YWt0X2lkIiwib3J0QVNCIiwiendlY2siLCJrb250YWt0U2NobGllc3ROaWNodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TablesContacts.jsx\n"));

/***/ })

});
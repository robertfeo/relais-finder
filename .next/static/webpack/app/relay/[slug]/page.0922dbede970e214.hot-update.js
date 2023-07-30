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

/***/ "(app-pages-browser)/./src/components/RelayDetails.jsx":
/*!*****************************************!*\
  !*** ./src/components/RelayDetails.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RelayDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RelayHeaderDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelayHeaderDetails */ \"(app-pages-browser)/./src/components/RelayHeaderDetails.jsx\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction RelayDetails(param) {\n    let { id } = param;\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        searchRelay(id);\n    }, [\n        id\n    ]);\n    async function searchRelay(id) {\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/relay?id=\".concat(id)).then((response)=>{\n            setResult(response.data);\n        }).catch((error)=>{\n            console.log(error);\n            (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({\n                title: \"Relais nicht gefunden\",\n                description: \"Bitte versuche es erneut.\",\n                variant: \"warning\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8\",\n            children: result.map((relais)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-medium mb-2 py-10\",\n                            children: relais.name || \"-\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 gap-8 mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Details\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Typ: \",\n                                            relais.relais.typ || \"-\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RelayHeaderDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        relayGroups: relais.relaisGruppe\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RelayTables, {\n                            relay: relais\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, relais.id, true, {\n                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(RelayDetails, \"HaEOteC6yG5HMVXXpmZ2rXfh/XA=\");\n_c = RelayDetails;\nvar _c;\n$RefreshReg$(_c, \"RelayDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF5RGV0YWlscy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRCO0FBQ0E7QUFDZjtBQUV4QixTQUFTTSxhQUFhLEtBQU07UUFBTixFQUFFQyxFQUFFLEVBQUUsR0FBTjs7SUFFakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ05RLFlBQVlIO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBRztJQUVQLGVBQWVHLFlBQVlILEVBQUU7UUFDekIsTUFBTVAsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyxpQkFBb0IsT0FBSEosS0FBTUssSUFBSSxDQUFDLENBQUNDO1lBQ3pDSixVQUFVSSxTQUFTQyxJQUFJO1FBQzNCLEdBQUdDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pYLG9EQUFLQSxDQUFDO2dCQUNGYyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxTQUFTO1lBQ2I7UUFDSjtJQUNKO0lBRUEscUJBQ0ksOERBQUNwQiwyQ0FBUUE7UUFBQ3FCLHdCQUFVLDhEQUFDQztzQkFBSTs7a0JBQ3JCLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUVWaEIsT0FBT2lCLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1IsOERBQUNIOztzQ0FDRyw4REFBQ0k7NEJBQUdILFdBQVU7c0NBQWtDRSxPQUFPRSxJQUFJLElBQUk7Ozs7OztzQ0FDL0QsOERBQUNMOzRCQUFJQyxXQUFVO3NDQUVYLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFnQjs7Ozs7O2tEQUM5Qiw4REFBQ007OzRDQUFFOzRDQUFNSixPQUFPQSxNQUFNLENBQUNLLEdBQUcsSUFBSTs7Ozs7OztrREFDOUIsOERBQUMzQiwyREFBa0JBO3dDQUFDNEIsYUFBYU4sT0FBT08sWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzVELDhEQUFDQzs0QkFBWUMsT0FBT1Q7Ozs7Ozs7bUJBWmRBLE9BQU9uQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFtQnZDO0dBN0N3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVsYXlEZXRhaWxzLmpzeD83Nzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFN1c3BlbnNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVsYXlIZWFkZXJEZXRhaWxzIGZyb20gXCIuL1JlbGF5SGVhZGVyRGV0YWlsc1wiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiLi91aS91c2UtdG9hc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVsYXlEZXRhaWxzKHsgaWQgfSkge1xuXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNlYXJjaFJlbGF5KGlkKTtcbiAgICB9LCBbaWRdKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFJlbGF5KGlkKSB7XG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChgL2FwaS9yZWxheT9pZD0ke2lkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBzZXRSZXN1bHQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlbGFpcyBuaWNodCBnZWZ1bmRlblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpdHRlIHZlcnN1Y2hlIGVzIGVybmV1dC5cIixcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04XCI+XG5cbiAgICAgICAgICAgICAgICB7cmVzdWx0Lm1hcChyZWxhaXMgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVsYWlzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIG1iLTIgcHktMTBcIj57cmVsYWlzLm5hbWUgfHwgJy0nfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTggbWItNFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5EZXRhaWxzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHlwOiB7cmVsYWlzLnJlbGFpcy50eXAgfHwgJy0nfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbGF5SGVhZGVyRGV0YWlscyByZWxheUdyb3Vwcz17cmVsYWlzLnJlbGFpc0dydXBwZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWxheVRhYmxlcyByZWxheT17cmVsYWlzfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3VzcGVuc2U+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWxheUhlYWRlckRldGFpbHMiLCJ0b2FzdCIsIlJlbGF5RGV0YWlscyIsImlkIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic2VhcmNoUmVsYXkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsImZhbGxiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicmVsYWlzIiwiaDEiLCJuYW1lIiwiaDMiLCJwIiwidHlwIiwicmVsYXlHcm91cHMiLCJyZWxhaXNHcnVwcGUiLCJSZWxheVRhYmxlcyIsInJlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelayDetails.jsx\n"));

/***/ })

});
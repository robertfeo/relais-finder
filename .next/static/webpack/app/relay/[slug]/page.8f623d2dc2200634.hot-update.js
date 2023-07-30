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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RelayDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RelayHeaderDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelayHeaderDetails */ \"(app-pages-browser)/./src/components/RelayHeaderDetails.jsx\");\n/* harmony import */ var _RelayTables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RelayTables */ \"(app-pages-browser)/./src/components/RelayTables.jsx\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction RelayDetails(param) {\n    let { id } = param;\n    _s();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        searchRelay(id);\n    }, [\n        id\n    ]);\n    async function searchRelay(id) {\n        await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"/api/relay?id=\".concat(id)).then((response)=>{\n            setResult(response.data);\n        }).catch((error)=>{\n            console.log(error);\n            (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.toast)({\n                title: \"Relais nicht gefunden\",\n                description: \"Bitte versuche es erneut.\",\n                variant: \"warning\"\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, void 0, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8\",\n            children: result.map((relais)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-medium mb-2 py-10\",\n                            children: relais.name || \"-\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 gap-8 mb-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"font-semibold\",\n                                        children: \"Details\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Typ: \",\n                                            relais.relais.typ || \"-\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RelayHeaderDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        relayGroups: relais.relaisGruppe\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RelayTables__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            relay: relais\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, relais.id, true, {\n                    fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayDetails.jsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(RelayDetails, \"HaEOteC6yG5HMVXXpmZ2rXfh/XA=\");\n_c = RelayDetails;\nvar _c;\n$RefreshReg$(_c, \"RelayDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF5RGV0YWlscy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QjtBQUNBO0FBQ2Q7QUFDRDtBQUV4QixTQUFTTyxhQUFhLEtBQU07UUFBTixFQUFFQyxFQUFFLEVBQUUsR0FBTjs7SUFFakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ05TLFlBQVlIO0lBQ2hCLEdBQUc7UUFBQ0E7S0FBRztJQUVQLGVBQWVHLFlBQVlILEVBQUU7UUFDekIsTUFBTVIsNkNBQUtBLENBQUNZLEdBQUcsQ0FBQyxpQkFBb0IsT0FBSEosS0FBTUssSUFBSSxDQUFDLENBQUNDO1lBQ3pDSixVQUFVSSxTQUFTQyxJQUFJO1FBQzNCLEdBQUdDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pYLG9EQUFLQSxDQUFDO2dCQUNGYyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxTQUFTO1lBQ2I7UUFDSjtJQUNKO0lBRUEscUJBQ0ksOERBQUNyQiwyQ0FBUUE7UUFBQ3NCLHdCQUFVLDhEQUFDQztzQkFBSTs7a0JBQ3JCLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUVWaEIsT0FBT2lCLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1IsOERBQUNIOztzQ0FDRyw4REFBQ0k7NEJBQUdILFdBQVU7c0NBQWtDRSxPQUFPRSxJQUFJLElBQUk7Ozs7OztzQ0FDL0QsOERBQUNMOzRCQUFJQyxXQUFVO3NDQUVYLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFnQjs7Ozs7O2tEQUM5Qiw4REFBQ007OzRDQUFFOzRDQUFNSixPQUFPQSxNQUFNLENBQUNLLEdBQUcsSUFBSTs7Ozs7OztrREFDOUIsOERBQUM1QiwyREFBa0JBO3dDQUFDNkIsYUFBYU4sT0FBT08sWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzVELDhEQUFDN0Isb0RBQVdBOzRCQUFDOEIsT0FBT1I7Ozs7Ozs7bUJBWmRBLE9BQU9uQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFtQnZDO0dBN0N3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVsYXlEZXRhaWxzLmpzeD83Nzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFN1c3BlbnNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVsYXlIZWFkZXJEZXRhaWxzIGZyb20gXCIuL1JlbGF5SGVhZGVyRGV0YWlsc1wiO1xuaW1wb3J0IFJlbGF5VGFibGVzIGZyb20gXCIuL1JlbGF5VGFibGVzXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCIuL3VpL3VzZS10b2FzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxheURldGFpbHMoeyBpZCB9KSB7XG5cbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2VhcmNoUmVsYXkoaWQpO1xuICAgIH0sIFtpZF0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUmVsYXkoaWQpIHtcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3JlbGF5P2lkPSR7aWR9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVsYWlzIG5pY2h0IGdlZnVuZGVuXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQml0dGUgdmVyc3VjaGUgZXMgZXJuZXV0LlwiLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLThcIj5cblxuICAgICAgICAgICAgICAgIHtyZXN1bHQubWFwKHJlbGFpcyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZWxhaXMuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gbWItMiBweS0xMFwiPntyZWxhaXMubmFtZSB8fCAnLSd9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtOCBtYi00XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkRldGFpbHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UeXA6IHtyZWxhaXMucmVsYWlzLnR5cCB8fCAnLSd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVsYXlIZWFkZXJEZXRhaWxzIHJlbGF5R3JvdXBzPXtyZWxhaXMucmVsYWlzR3J1cHBlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlbGF5VGFibGVzIHJlbGF5PXtyZWxhaXN9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICApXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlbGF5SGVhZGVyRGV0YWlscyIsIlJlbGF5VGFibGVzIiwidG9hc3QiLCJSZWxheURldGFpbHMiLCJpZCIsInJlc3VsdCIsInNldFJlc3VsdCIsInNlYXJjaFJlbGF5IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJmYWxsYmFjayIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInJlbGFpcyIsImgxIiwibmFtZSIsImgzIiwicCIsInR5cCIsInJlbGF5R3JvdXBzIiwicmVsYWlzR3J1cHBlIiwicmVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelayDetails.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/RelayTables.jsx":
/*!****************************************!*\
  !*** ./src/components/RelayTables.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RelayTables; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction RelayTables(param) {\n    let { relay } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mr-auto ml-auto mb-4 py-10 space-y-10 w-9/12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TablesSpools, {\n                spools: relay.spule || \"-\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayTables.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TablesContacts, {\n                className: \"\",\n                contacts: relay.kontakt || \"-\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayTables.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayTables.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = RelayTables;\nvar _c;\n$RefreshReg$(_c, \"RelayTables\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF5VGFibGVzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUVWLFNBQVNDLFlBQVksS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUO0lBRWhDLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQWFDLFFBQVFKLE1BQU1LLEtBQUssSUFBSTs7Ozs7OzBCQUNyQyw4REFBQ0M7Z0JBQWVKLFdBQVU7Z0JBQUdLLFVBQVVQLE1BQU1RLE9BQU8sSUFBSTs7Ozs7Ozs7Ozs7O0FBR3BFO0tBUndCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWxheVRhYmxlcy5qc3g/N2I3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGF5VGFibGVzKHsgcmVsYXkgfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1yLWF1dG8gbWwtYXV0byBtYi00IHB5LTEwIHNwYWNlLXktMTAgdy05LzEyXCI+XG4gICAgICAgICAgICA8VGFibGVzU3Bvb2xzIHNwb29scz17cmVsYXkuc3B1bGUgfHwgJy0nfSAvPlxuICAgICAgICAgICAgPFRhYmxlc0NvbnRhY3RzIGNsYXNzTmFtZT1cIlwiIGNvbnRhY3RzPXtyZWxheS5rb250YWt0IHx8ICctJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVsYXlUYWJsZXMiLCJyZWxheSIsImRpdiIsImNsYXNzTmFtZSIsIlRhYmxlc1Nwb29scyIsInNwb29scyIsInNwdWxlIiwiVGFibGVzQ29udGFjdHMiLCJjb250YWN0cyIsImtvbnRha3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelayTables.jsx\n"));

/***/ })

});
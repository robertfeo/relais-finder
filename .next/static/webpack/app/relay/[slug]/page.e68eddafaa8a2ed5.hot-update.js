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

/***/ "(app-pages-browser)/./src/components/RelayHeaderDetails.jsx":
/*!***********************************************!*\
  !*** ./src/components/RelayHeaderDetails.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RelayHeaderDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction RelayHeaderDetails(param) {\n    let { relayGroups } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-red-300\",\n        children: relayGroups.map((relayGroup)=>{\n            const { name, sachnummer, siNaName } = relayGroup;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Sachnummer: \",\n                            sachnummer\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Sicherheitsnachweis: \",\n                            siNaName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, relayGroup.id, true, {\n                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                lineNumber: 11,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = RelayHeaderDetails;\nvar _c;\n$RefreshReg$(_c, \"RelayHeaderDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF5SGVhZGVyRGV0YWlscy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWUsU0FBU0EsbUJBQW1CLEtBQWU7UUFBZixFQUFFQyxXQUFXLEVBQUUsR0FBZjtJQUV2QyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDVkYsWUFBWUcsR0FBRyxDQUFDQyxDQUFBQTtZQUNiLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRSxHQUFHSDtZQUV2QyxxQkFDSSw4REFBQ0g7O2tDQUNHLDhEQUFDTzs7NEJBQUU7NEJBQU9IOzs7Ozs7O2tDQUNWLDhEQUFDRzs7NEJBQUU7NEJBQWFGOzs7Ozs7O2tDQUNoQiw4REFBQ0U7OzRCQUFFOzRCQUFzQkQ7Ozs7Ozs7O2VBSG5CSCxXQUFXSyxFQUFFOzs7OztRQU0vQjs7Ozs7O0FBR1o7S0FqQndCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWxheUhlYWRlckRldGFpbHMuanN4PzUyZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGF5SGVhZGVyRGV0YWlscyh7IHJlbGF5R3JvdXBzIH0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTMwMFwiPlxuICAgICAgICAgICAge3JlbGF5R3JvdXBzLm1hcChyZWxheUdyb3VwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUsIHNhY2hudW1tZXIsIHNpTmFOYW1lIH0gPSByZWxheUdyb3VwXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cmVsYXlHcm91cC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5OYW1lOiB7bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TYWNobnVtbWVyOiB7c2FjaG51bW1lcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TaWNoZXJoZWl0c25hY2h3ZWlzOiB7c2lOYU5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWxheUhlYWRlckRldGFpbHMiLCJyZWxheUdyb3VwcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInJlbGF5R3JvdXAiLCJuYW1lIiwic2FjaG51bW1lciIsInNpTmFOYW1lIiwicCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelayHeaderDetails.jsx\n"));

/***/ })

});
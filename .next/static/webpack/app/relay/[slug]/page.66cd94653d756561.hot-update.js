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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RelayHeaderDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction RelayHeaderDetails(param) {\n    let { relayData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-red-300 basis\",\n        children: [\n            relayData\n        ].map((relais)=>{\n            const { name, sachnummer, siNaName } = relais.relaisGruppe;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        class: \"text-4xl font-extrabold leading-none tracking-tight text-zinc-600 md:text-5xl lg:text-6xl dark:text-white\",\n                        children: relais.id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"my-4 text-lg text-zinc-600\",\n                        children: relais.name || \"-\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Typ: \",\n                            relais.relais.typ || \"-\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Sachnummer: \",\n                            sachnummer\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Sicherheitsnachweis: \",\n                            siNaName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, relais.id, true, {\n                fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n                lineNumber: 11,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Wissen\\\\Freizeit\\\\Programmieren\\\\Web Applications\\\\Fullstack\\\\relais-finder\\\\src\\\\components\\\\RelayHeaderDetails.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = RelayHeaderDetails;\nvar _c;\n$RefreshReg$(_c, \"RelayHeaderDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1JlbGF5SGVhZGVyRGV0YWlscy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWUsU0FBU0EsbUJBQW1CLEtBQWE7UUFBYixFQUFFQyxTQUFTLEVBQUUsR0FBYjtJQUV2QyxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDVjtZQUFDRjtTQUFVLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUE7WUFDYixNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUUsR0FBR0gsT0FBT0ksWUFBWTtZQUUxRCxxQkFDSSw4REFBQ1A7O2tDQUNHLDhEQUFDUTt3QkFBR0MsT0FBTTtrQ0FBNkdOLE9BQU9PLEVBQUU7Ozs7OztrQ0FDaEksOERBQUNDO3dCQUFFRixPQUFNO2tDQUE4Qk4sT0FBT0MsSUFBSSxJQUFJOzs7Ozs7a0NBQ3RELDhEQUFDTzs7NEJBQUU7NEJBQU1SLE9BQU9BLE1BQU0sQ0FBQ1MsR0FBRyxJQUFJOzs7Ozs7O2tDQUM5Qiw4REFBQ0Q7OzRCQUFFOzRCQUFPUDs7Ozs7OztrQ0FDViw4REFBQ087OzRCQUFFOzRCQUFhTjs7Ozs7OztrQ0FDaEIsOERBQUNNOzs0QkFBRTs0QkFBc0JMOzs7Ozs7OztlQU5uQkgsT0FBT08sRUFBRTs7Ozs7UUFTM0I7Ozs7OztBQUdaO0tBcEJ3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVsYXlIZWFkZXJEZXRhaWxzLmpzeD81MmUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxheUhlYWRlckRldGFpbHMoeyByZWxheURhdGEgfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtMzAwIGJhc2lzXCI+XG4gICAgICAgICAgICB7W3JlbGF5RGF0YV0ubWFwKHJlbGFpcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBzYWNobnVtbWVyLCBzaU5hTmFtZSB9ID0gcmVsYWlzLnJlbGFpc0dydXBwZVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3JlbGFpcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLW5vbmUgdHJhY2tpbmctdGlnaHQgdGV4dC16aW5jLTYwMCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBkYXJrOnRleHQtd2hpdGVcIj57cmVsYWlzLmlkfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm15LTQgdGV4dC1sZyB0ZXh0LXppbmMtNjAwXCI+e3JlbGFpcy5uYW1lIHx8ICctJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UeXA6IHtyZWxhaXMucmVsYWlzLnR5cCB8fCAnLSd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmFtZToge25hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2FjaG51bW1lcjoge3NhY2hudW1tZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2ljaGVyaGVpdHNuYWNod2Vpczoge3NpTmFOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVsYXlIZWFkZXJEZXRhaWxzIiwicmVsYXlEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicmVsYWlzIiwibmFtZSIsInNhY2hudW1tZXIiLCJzaU5hTmFtZSIsInJlbGFpc0dydXBwZSIsImgxIiwiY2xhc3MiLCJpZCIsInAiLCJ0eXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/RelayHeaderDetails.jsx\n"));

/***/ })

});
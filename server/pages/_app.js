(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(210);
/* harmony import */ var _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.extendTheme)({
    colors: {
        ..._chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme.colors,
        brand: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme.colors.pink
    }
}, _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_3__.theme);
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 797:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/pro-theme");;

/***/ }),

/***/ 210:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(847));
module.exports = __webpack_exports__;

})();
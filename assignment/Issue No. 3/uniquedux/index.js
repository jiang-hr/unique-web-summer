"use strict";
exports.__esModule = true;
exports.Uniquedux = void 0;
var Store_1 = require("./Store");
var Uniquedux = /** @class */ (function () {
    function Uniquedux() {
    }
    Uniquedux.createStore = function (reducer) {
        return new Store_1["default"](reducer);
    };
    return Uniquedux;
}());
exports.Uniquedux = Uniquedux;

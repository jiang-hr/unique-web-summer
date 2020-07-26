var Store = /** @class */ (function () {
    function Store(reducer) {
        this._setState = function () { };
        this.reducer = new Function('return ' + reducer.toString())();
        this.state = this.reducer(undefined, {});
    }
    Store.prototype.getState = function () {
        return this.state;
    };
    Store.prototype.dispatch = function (action) {
        var _this = this;
        setTimeout(function () {
            _this._setState();
        });
        this.state = this.reducer(this.state, action);
    };
    Store.prototype.subscribe = function (render) {
        this._setState = new Function('return ' + render.toString())();
    };
    Store.prototype.replaceReducer = function (reducer) {
        this.reducer = new Function('return ' + reducer.toString())();
    };
    return Store;
}());
var Uniquedux = /** @class */ (function () {
    function Uniquedux() {
    }
    Uniquedux.createStore = function (reducer) {
        return new Store(reducer);
    };
    return Uniquedux;
}());
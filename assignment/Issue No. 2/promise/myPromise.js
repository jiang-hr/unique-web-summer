var Status;
(function (Status) {
    Status[Status["pending"] = 0] = "pending";
    Status[Status["fulfilled"] = 1] = "fulfilled";
    Status[Status["rejected"] = 2] = "rejected";
})(Status || (Status = {}));
// myPromise类型
var MyPromise = /** @class */ (function () {
    function MyPromise(executor) {
        var _this = this;
        this.value = null;
        this.reason = null;
        this.status = Status.pending;
        this.onFulfilledArray = []; //成功回调
        this.onRejectedArray = []; //失败回调
        this.fulfill = function (value) {
            if (_this.status === Status.pending) {
                _this.status = Status.fulfilled;
                _this.value = value;
                _this.onFulfilledArray.forEach(function (fn) { return fn(_this.value); });
            }
        };
        this.reject = function (reason) {
            if (_this.status === Status.pending) {
                _this.status = Status.rejected;
                _this.reason = reason;
                _this.onRejectedArray.forEach(function (fn) { return fn(_this.value); });
            }
        };
        this.resolvePromise = function (myPromise, x, fulfill, reject) {
            var _this = this;
            if (myPromise === x) {
                reject(new TypeError('Chaining cycle detected for promise'));
            }
            var called = false;
            if (x instanceof MyPromise) {
                x.then(function (value) {
                    _this.resolvePromise(myPromise, value, fulfill, reject);
                }, function (reason) {
                    reject(reason);
                });
            }
            else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
                // x 为对象或函数
                try {
                    var then = x.then;
                    if (typeof then === 'function') {
                        then.call(x, function (value) {
                            if (called)
                                return;
                            called = true;
                            _this.resolvePromise(myPromise, value, fulfill, reject);
                        }, function (reason) {
                            if (called)
                                return;
                            called = true;
                            reject(reason);
                        });
                    }
                    else {
                        if (called)
                            return;
                        called = true;
                        fulfill(x);
                    }
                }
                catch (error) {
                    if (called)
                        return;
                    called = true;
                    reject(error);
                }
            }
            else {
                fulfill(x);
            }
        };
        try {
            executor(this.fulfill, this.reject);
        }
        catch (error) {
            this.reject(error);
        }
    }
    MyPromise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        if (onFulfilled === void 0) { onFulfilled = function (value) {
            return value;
        }; }
        if (onRejected === void 0) { onRejected = function (reason) {
            throw reason;
        }; }
        var myPromise = new MyPromise(function (fulfill, reject) {
            if (fulfill === void 0) { fulfill = onFulfilled; }
            if (reject === void 0) { reject = onRejected; }
            if (_this.status === Status.fulfilled) {
                setTimeout(function () {
                    try {
                        var x = onFulfilled(_this.value);
                        _this.resolvePromise(myPromise, x, fulfill, reject);
                    }
                    catch (error) {
                        onRejected(error);
                    }
                });
            }
            else if (_this.status === Status.rejected) {
                setTimeout(function () {
                    try {
                        var x = onRejected(_this.reason);
                        _this.resolvePromise(myPromise, x, fulfill, reject);
                    }
                    catch (error) {
                        onRejected(error);
                    }
                });
            }
            else if (_this.status === Status.pending) {
                _this.onFulfilledArray.push(function (value) {
                    setTimeout(function () {
                        try {
                            var x = onFulfilled(value);
                            _this.resolvePromise(myPromise, x, fulfill, reject);
                        }
                        catch (error) {
                            onRejected(error);
                        }
                    });
                });
                _this.onRejectedArray.push(function (reason) {
                    try {
                        var x = onRejected(reason);
                        _this.resolvePromise(myPromise, x, fulfill, reject);
                    }
                    catch (error) {
                        onRejected(error);
                    }
                });
            }
        });
        return myPromise;
    };
    ;
    return MyPromise;
}());
module.exports = MyPromise;

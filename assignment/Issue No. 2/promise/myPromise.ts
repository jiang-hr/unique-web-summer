enum Status {
    pending,
    fulfilled,
    rejected,
}

// myPromise类型
class MyPromise {
    public value: any | null = null;
    public reason: any | null = null;
    public status: Status = Status.pending;

    private onFulfilledArray: Array<Function> = []; //成功回调
    private onRejectedArray: Array<Function> = []; //失败回调

    public fulfill: Function | undefined = (value: any) => {
        if (this.status === Status.pending) {
            this.status = Status.fulfilled;
            this.value = value;
            this.onFulfilledArray.forEach((fn: Function) => fn(this.value));
        }
    };

    public reject: Function | undefined = (reason: any) => {
        if (this.status === Status.pending) {
            this.status = Status.rejected;
            this.reason = reason;
            this.onRejectedArray.forEach((fn: Function) => fn(this.value));
        }
    };

    public constructor(executor: ((fulfill: Function, reject: Function) => any)) {
        try {
            executor(this.fulfill, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }

    public then(onFulfilled: Function = (value: any) => {
        return value;
    }, onRejected: Function = (reason: any) => {
        throw reason;
    }) {
        let myPromise = new MyPromise((fulfill: Function = onFulfilled, reject: Function = onRejected) => {
            if (this.status === Status.fulfilled) {
                setTimeout(() => {
                    try {
                        const x: any = onFulfilled(this.value);
                        this.resolvePromise(myPromise, x, fulfill, reject);
                    } catch (error) {
                        onRejected(error);
                    }
                });
            } else if (this.status === Status.rejected) {
                setTimeout(() => {
                    try {
                        const x: any = onRejected(this.reason);
                        this.resolvePromise(myPromise, x, fulfill, reject);
                    } catch (error) {
                        onRejected(error);
                    }
                });
            } else if (this.status === Status.pending) {
                this.onFulfilledArray.push((value: any) => {
                    setTimeout(() => {
                        try {
                            const x: any = onFulfilled(value);
                            this.resolvePromise(myPromise, x, fulfill, reject);
                        } catch (error) {
                            onRejected(error);
                        }
                    });
                });

                this.onRejectedArray.push((reason: any) => {
                    try {
                        const x: any = onRejected(reason);
                        this.resolvePromise(myPromise, x, fulfill, reject);
                    } catch (error) {
                        onRejected(error);
                    }
                });
            }
        });
        return myPromise;
    };


    private resolvePromise: Function = function (myPromise: MyPromise, x: any, fulfill: Function, reject: Function) {
        if (myPromise === x) {
            reject(new TypeError('Chaining cycle detected for promise'));
        }
        let called: boolean = false;
        if (x instanceof MyPromise) {
            x.then(
                (value: any) => {
                    this.resolvePromise(myPromise, value, fulfill, reject);
                },
                (reason: any) => {
                    reject(reason);
                }
            )
        } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            // x 为对象或函数
            try {
                const then = x.then
                if (typeof then === 'function') {
                    then.call(x, (value: any) => {
                        if (called) return;
                        called = true;
                        this.resolvePromise(myPromise, value, fulfill, reject);
                    }, (reason: any) => {
                        if (called) return;
                        called = true;
                        reject(reason);
                    })
                } else {
                    if (called) return;
                    called = true;
                    fulfill(x);
                }
            } catch (error) {
                if (called) return;
                called = true;
                reject(error);
            }
        } else {
            fulfill(x);
        }
    };
}

module.exports = MyPromise;


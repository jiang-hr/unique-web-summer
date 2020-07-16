const MyPromise = require('./myPromise.js');


new MyPromise((resolve, reject) => {
    resolve(1);
}).then(value => {
    throw new Error("NMSLESE");
}, reason => {
    console.log('reason', reason);
}
).then(
    (value) => {
        console.log('value', value);
    },
    (reason) => {
        console.log('reason', reason);
    }
)



function runAsync1() {
    let p = new MyPromise(function (resolve, reject) {
        setTimeout(function () {
            console.log('1_执行完成');
            resolve('随便什么数据_1');
        }, 2000);
    });
    console.log(p);
    return p;
}

function runAsync2(data) {
    let p = new MyPromise(function (resolve, reject) {
        setTimeout(function () {
            console.log('2_执行完成');
            console.log(data);
            resolve('随便什么数据_2');
        }, 2000);
    });
    console.log(p);
    return p;
}

function runAsync3(data) {
    let p = new MyPromise(function (resolve, reject) {
        setTimeout(function () {
            console.log('3_执行完成');
            console.log(data);
            resolve('随便什么数据_3');
        }, 2000);
    });
    console.log(p);
    return p;
}

function runAsync4(data) {
    let p = new MyPromise(function (resolve, reject) {
        setTimeout(function () {
            console.log('4_执行完成');
            console.log(data);
            resolve('随便什么数据_4');
        }, 2000);
    });
    console.log(p);
    return p;
}

runAsync1().then(runAsync2).then(runAsync3).then(runAsync4);

setInterval(() => {
    console.log("auto log");
}, 4000);


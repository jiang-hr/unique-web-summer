"use strict";
exports.__esModule = true;
exports.createElement = exports.DOM = void 0;
function DOM(tag, props, children) {
    return { tag: tag, props: props, children: children };
}
exports.DOM = DOM;
function createElement(tag, props) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    var children;
    var n;
    var child = [];
    if (c !== undefined) {
        if (Array.isArray(c)) {
            if (typeof c[0] === 'number' && c.length === 1) {
                props.key = c[0];
                return DOM(tag, props, undefined);
            }
            else if (typeof c[0] === 'string') {
                return DOM(tag, props, c[0]);
            }
            else {
                children = c;
            }
        }
        else if (c && c.tag) {
            children = [c,];
        }
    }
    if (children !== undefined) {
        var dfs_1 = function (children) {
            for (var i = 0; i < children.length; ++i) {
                if (Array.isArray(children[i])) {
                    dfs_1(children[i]);
                }
                else {
                    child.push(children[i]);
                }
            }
        };
        dfs_1(children);
    }
    return DOM(tag, props, child);
}
exports.createElement = createElement;
;
var a = createElement("div", { className: "big" }, createElement("span", { className: "big-inner" }, "nihao"), [1, 2, 3, 4, 5].map(function (n) {
    return createElement("span", { className: "big-inner-number", key: n }, n);
}), createElement("span", { className: "big-inner" }, "shijie"));
console.log(a);

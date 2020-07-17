function DOM(tag, props, children) {
    return { tag: tag, props: props, children: children };
}
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
            if (typeof c[0] === 'number') {
                n = c[0];
                props.key = n;
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
;
var a = createElement("div", { "class": "big" }, createElement("span", { "class": "big-inner" }, "nihao"), [1, 2, 3, 4, 5].map(function (n) {
    return createElement("span", { "class": "big-inner-number", key: n }, n);
}), createElement("span", { "class": "big-inner" }, "shijie"));
console.log(a);

"use strict";
exports.__esModule = true;
function render(vdom, container) {
    var a = document.createElement(vdom.tag);
    if (vdom.props.className) {
        a.className = vdom.props.className;
    }
    if (vdom.props.id) {
        a.id = vdom.props.id;
    }
    if (typeof vdom.children === 'string') {
        a.append(vdom.children);
    }
    if (Array.isArray(vdom.children)) {
        for (var x = 0; x < vdom.children.length; x++) {
            if (typeof vdom.children[x] === 'string') {
                a.append(vdom.children[x]);
            }
            else {
                render(vdom.children[x], a);
            }
        }
    }
    container.appendChild(a);
}
exports["default"] = render;
var c = {
    tag: "div",
    props: {
        id: "v-span",
        className: "demo",
        key: "xxx"
    },
    children: [
        "你好世界",
        {
            tag: "span",
            props: {
                id: "v-span"
            },
            children: [
                "123"
            ]
        }
    ]
};
render(c, document.getElementById("example"));

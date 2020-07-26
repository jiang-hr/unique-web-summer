"use strict";
exports.__esModule = true;
exports._render = void 0;
function _render(vdom) {
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
    return a;
}
exports._render = _render;
function render(vdom, container) {
    var a = _render(vdom);
    container.appendChild(a);
}
exports["default"] = render;

"use strict";
exports.__esModule = true;
var render_1 = require("./render");
var diff_1 = require("./diff");
function patch(root, patches) {
    patches.forEach(function (modify) {
        var node = root;
        for (var i = 0; i < modify.position.length - 1; ++i)
            node = node.childNodes[modify.position[i]];
        var parent = node;
        var pos = modify.position[modify.position.length - 1];
        switch (modify.type) {
            case diff_1.typeDOM.add:
                if (modify.text)
                    parent.append(modify.text);
                else
                    render_1["default"](modify.element, parent);
                break;
            case diff_1.typeDOM.remove:
                parent.removeChild(parent.childNodes[pos]);
                break;
            case diff_1.typeDOM.changedAll:
                if (modify.text)
                    parent.insertBefore(document.createTextNode(modify.text), parent.childNodes[pos]);
                else
                    parent.insertBefore(render_1._render(modify.element), parent.childNodes[pos]);
                parent.removeChild(parent.childNodes[pos + 1]);
                break;
            case diff_1.typeDOM.changeProp:
                if (modify.props.className)
                    parent.childNodes[pos].className = modify.props.className;
                if (modify.props.id)
                    parent.childNodes[pos].id = modify.props.id;
                break;
            default:
                break;
        }
    });
}
exports["default"] = patch;

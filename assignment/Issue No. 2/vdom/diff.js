"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.typeDOM = void 0;
var typeDOM;
(function (typeDOM) {
    typeDOM[typeDOM["add"] = 0] = "add";
    typeDOM[typeDOM["remove"] = 1] = "remove";
    typeDOM[typeDOM["changedAll"] = 2] = "changedAll";
    typeDOM[typeDOM["changeProp"] = 3] = "changeProp";
})(typeDOM = exports.typeDOM || (exports.typeDOM = {}));
function diff(oldTree, newTree) {
    var result = [];
    dfsDiff(oldTree, newTree, result, [0,]);
    return result;
}
exports["default"] = diff;
function dfsDiff(oldTree, newTree, result, position) {
    if (oldTree.tag !== newTree.tag) {
        result.push({ position: position, type: typeDOM.changedAll });
        return;
    }
    else {
        var prop = {};
        if (oldTree.props.className !== newTree.props.className)
            prop.className = newTree.props.className;
        if (oldTree.props.id !== newTree.props.id)
            prop.id = newTree.props.id;
        if (oldTree.props.key !== newTree.props.key)
            prop.key = newTree.props.key;
        if (prop.className !== undefined || prop.id !== undefined || prop.key !== undefined)
            result.push({ position: position, type: typeDOM.changeProp, props: prop });
    }
    var oldLongerThanNew = oldTree.children.length > newTree.children.length;
    var oldLength = oldTree.children.length;
    var newLength = newTree.children.length;
    for (var i = 0; i < (oldLongerThanNew ? newLength : oldLength); ++i) {
        var oldChild = oldTree.children[i];
        var newChild = newTree.children[i];
        if (typeof oldChild !== typeof newChild) {
            if (typeof newChild === 'string') {
                result.push({ position: __spreadArrays(position, [i]), type: typeDOM.changedAll, text: newChild });
            }
            else {
                result.push({ position: __spreadArrays(position, [i]), type: typeDOM.changedAll, element: newChild });
            }
        }
        else {
            if (typeof newChild === 'string') {
                if (oldChild !== newChild) {
                    result.push({ position: __spreadArrays(position, [i]), type: typeDOM.changedAll, text: newChild });
                }
            }
            else {
                dfsDiff(oldChild, newChild, result, __spreadArrays(position, [i]));
            }
        }
    }
    if (oldLongerThanNew) {
        for (var i = newLength; i < oldLength; ++i) {
            result.push({ position: __spreadArrays(position, [i]), type: typeDOM.remove });
        }
    }
    else {
        for (var i = oldLength; i < newLength; ++i) {
            var newChild = newTree.children[i];
            if (typeof newChild === 'string') {
                result.push({ position: __spreadArrays(position, [i]), type: typeDOM.add, text: newChild });
            }
            else {
                result.push({ position: __spreadArrays(position, [i]), type: typeDOM.add, element: newChild });
            }
        }
    }
}

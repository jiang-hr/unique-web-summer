import { DOM, createElement, DOMData } from './vdom'

export enum typeDOM {
    add,
    remove,
    changedAll,
    changeProp,
}

export interface diffDOM {
    position: Array<number>,
    type: typeDOM,
    element?: DOM | undefined,
    text?: string | undefined,
    props?: DOMData,
}

export default function diff(oldTree: DOM, newTree: DOM): Array<diffDOM> {
    let result: Array<diffDOM> = [];
    dfsDiff(oldTree, newTree, result, [0,]);
    return result;
}

function dfsDiff(oldTree: DOM, newTree: DOM, result: Array<diffDOM>, position: Array<number>): void {
    if (oldTree.tag !== newTree.tag) {
        result.push({ position: position, type: typeDOM.changedAll });
        return;
    } else {
        let prop: DOMData = {};
        if (oldTree.props.className !== newTree.props.className)
            prop.className = newTree.props.className;
        if (oldTree.props.id !== newTree.props.id)
            prop.id = newTree.props.id;
        if (oldTree.props.key !== newTree.props.key)
            prop.key = newTree.props.key;
        if (prop.className !== undefined || prop.id !== undefined || prop.key !== undefined)
            result.push({ position: position, type: typeDOM.changeProp, props: prop });
    }

    const oldLongerThanNew: boolean = oldTree.children.length > newTree.children.length;
    const oldLength: number = oldTree.children.length;
    const newLength: number = newTree.children.length;

    for (let i = 0; i < (oldLongerThanNew ? newLength : oldLength); ++i) {
        const oldChild: string | DOM = oldTree.children[i];
        const newChild: string | DOM = newTree.children[i];
        if (typeof oldChild !== typeof newChild) {
            if (typeof newChild === 'string') {
                result.push({ position: [...position, i], type: typeDOM.changedAll, text: newChild })
            } else {
                result.push({ position: [...position, i], type: typeDOM.changedAll, element: newChild })
            }
        } else {
            if (typeof newChild === 'string') {
                if (oldChild !== newChild) {
                    result.push({ position: [...position, i], type: typeDOM.changedAll, text: newChild })
                }
            } else {
                dfsDiff(oldChild as DOM, newChild, result, [...position, i]);
            }
        }
    }
    if (oldLongerThanNew) {
        for (let i = newLength; i < oldLength; ++i) {
            result.push({ position: [...position, i], type: typeDOM.remove });
        }
    } else {
        for (let i = oldLength; i < newLength; ++i) {
            const newChild: string | DOM = newTree.children[i];
            if (typeof newChild === 'string') {
                result.push({ position: [...position, i], type: typeDOM.add, text: newChild });
            } else {
                result.push({ position: [...position, i], type: typeDOM.add, element: newChild });
            }
        }
    }
}


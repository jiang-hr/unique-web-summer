import { DOM } from './vdom'

export function _render(vdom: DOM): HTMLElement {
    let a: HTMLElement = document.createElement(vdom.tag);
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
        for (let x = 0; x < vdom.children.length; x++) {
            if (typeof vdom.children[x] === 'string') {
                a.append(vdom.children[x] as string);
            } else {
                render(vdom.children[x] as DOM, a);
            }
        }
    }
    return a;
}

export default function render(vdom: DOM, container: HTMLElement) {
    let a: HTMLElement = _render(vdom);
    container.appendChild(a);
}


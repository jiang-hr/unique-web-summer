import { DOM, DOMData, createElement } from './vdom'


var c: DOM = {
    tag: "div",
    props: {
        id: "kkb-div",
        className: "demo",
        key: "xxx"
    },
    children: [
        "你好世界",
        {
            tag: "span",
            props: {
                id: "kkb-span",
            },
            children: [
                "123"
            ]
        }
    ]
}

export default function render(vdom: DOM, container: HTMLElement) {

}

render(c,document.getElementById("example"));
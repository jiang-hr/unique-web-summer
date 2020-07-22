import { DOM, createElement } from './vdom'
import render, { _render } from './render'
import diff, { typeDOM, diffDOM } from './diff'


export default function patch(root: HTMLElement, patches: Array<diffDOM>) {
    patches.forEach(modify => {
        let node: HTMLElement = root;
        for (let i = 0; i < modify.position.length - 1; ++i)
            node = node.childNodes[modify.position[i]] as HTMLElement;
        let parent: HTMLElement = node;
        let pos: number = modify.position[modify.position.length - 1];

        switch (modify.type) {
            case typeDOM.add:
                if (modify.text)
                    parent.append(modify.text);
                else
                    render(modify.element, parent);
                break;
            case typeDOM.remove:
                parent.removeChild(parent.childNodes[pos]);
                break;
            case typeDOM.changedAll:
                if (modify.text)
                    parent.insertBefore(document.createTextNode(modify.text), parent.childNodes[pos]);
                else
                    parent.insertBefore(_render(modify.element), parent.childNodes[pos])
                parent.removeChild(parent.childNodes[pos + 1]);
                break;
            case typeDOM.changeProp:
                if (modify.props.className)
                    (parent.childNodes[pos] as HTMLElement).className = modify.props.className;
                if (modify.props.id)
                    (parent.childNodes[pos] as HTMLElement).id = modify.props.id;
                break;
            default:
                break;
        }
    })
}


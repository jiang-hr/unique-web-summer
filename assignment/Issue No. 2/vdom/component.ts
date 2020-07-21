import { DOMData, DOM, createElement, DOMChildren } from './vdom';


export class Component {

    static isComponent: boolean = true;

    constructor(props: DOMData) {

    }
}


class MySpan extends Component {
    state = {

    }


    setState(func: (prevState: object | undefined) => {}): void
    setState(state: object): void
    setState(a: any): void { };

    
}
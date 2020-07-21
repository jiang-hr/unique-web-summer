export type ArrayOrElement<T> = T | T[]

export interface DOMData {
    className?: string | undefined;
    key?: number | string | undefined;
    id?: string | undefined;
}

export interface DOM {
    tag: string,
    props: DOMData,
    children: Array<ArrayOrElement<DOM> | string> | ArrayOrElement<DOM> | string,
}

export type DOMChildren = Array<ArrayOrElement<DOM> | string>;

export function DOM(
    tag: string,
    props: DOMData,
    children: DOMChildren | ArrayOrElement<DOM> | string,
): DOM {
    return { tag, props, children }
}


export function createElement(tag: string, props: DOMData, ...children: DOMChildren): DOM;
export function createElement(tag: string, props: DOMData, n: number): DOM
export function createElement(tag: string, props: DOMData, ...c: any): DOM {
    var children: any;
    var n: number;
    var child: DOMChildren = [];
    if (c !== undefined) {
        if (Array.isArray(c)) {
            if (typeof c[0] === 'number' && c.length === 1) {
                props.key = c[0];
                return DOM(tag, props, undefined);
            } else if (typeof c[0] === 'string') {
                return DOM(tag, props, c[0]);
            } else {
                children = c;
            }
        } else if (c && c.tag) {
            children = [c,];
        }
    }
    if (children !== undefined) {
        let dfs = (children: DOMChildren) => {
            for (let i: number = 0; i < children.length; ++i) {
                if (Array.isArray(children[i])) {
                    dfs(children[i] as Array<DOM>);
                } else {
                    child.push(children[i]);
                }
            }
        }
        dfs(children);
    }
    return DOM(tag, props, child);
};


let a = createElement(
    "div",
    { className: "big" },
    createElement("span", { className: "big-inner" }, "nihao"),
    [1, 2, 3, 4, 5].map(n =>
        createElement("span", { className: "big-inner-number", key: n }, n)
    ),
    createElement("span", { className: "big-inner" }, "shijie")
);

console.log(a);


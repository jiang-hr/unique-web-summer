type ArrayOrElement<T> = T | T[]

interface DOMData {
    style?: string | undefined;
    class?: string | undefined;
    key?: number | undefined;
}

interface DOM {
    tag: string,
    props: DOMData,
    children: Array<ArrayOrElement<DOM> | string> | ArrayOrElement<DOM> | string,
    key?: string | number | undefined,
}

type DOMChildren = Array<ArrayOrElement<DOM> | string>;

function DOM(
    tag: string,
    props: DOMData,
    children: DOMChildren | ArrayOrElement<DOM> | string,
): DOM {
    return { tag, props, children }
}


function createElement(tag: string, props: DOMData, ...children: DOMChildren): DOM;
function createElement(tag: string, props: DOMData, n: number): DOM
function createElement(tag: string, props: DOMData, ...c: any): DOM {
    var children: any;
    var n: number;
    var child: DOMChildren = [];
    if (c !== undefined) {
        if (Array.isArray(c)) {
            if (typeof c[0] === 'number') {
                n = c[0];
                props.key = n;
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
    { class: "big" },
    createElement("span", { class: "big-inner" }, "nihao"),
    [1, 2, 3, 4, 5].map(n =>
        createElement("span", { class: "big-inner-number", key: n }, n)
    ),
    createElement("span", { class: "big-inner" }, "shijie")
);

console.log(a);

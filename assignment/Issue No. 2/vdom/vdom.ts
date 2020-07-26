export type ArrayOrElement<T> = T | T[]

export interface DOMData {
    className?: string | undefined;
    key?: number | string | undefined;
    id?: string | undefined;
}

export interface DOM {
    tag: string,
    props: DOMData,
    children: Array<DOM | string>
}

export type DOMChildren = Array<DOM | string>;

export function DOM(
    tag: string,
    props: DOMData,
    children: ArrayOrElement<DOM | string>,
): DOM {
    if (Array.isArray(children))
        return { tag, props, children }
    else
        return { tag, props, children: [children] }
}


export function createElement(tag: string, props: DOMData, ...children: ArrayOrElement<DOMChildren>): DOM;
export function createElement(tag: string, props: DOMData, n: number): DOM
export function createElement(tag: string, props: DOMData, ...c: any): DOM {
    var children: any;
    var n: number;
    var child: DOMChildren = [];
    if (c !== undefined) {
        if (Array.isArray(c)) {
            if (typeof c[0] === 'number' && c.length === 1) {
                return DOM(tag, props, c[0].toString());
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
        let dfs = (children: ArrayOrElement<DOMChildren>) => {
            for (let i: number = 0; i < children.length; ++i) {
                if (Array.isArray(children[i])) {
                    dfs(children[i] as Array<DOM>);
                } else {
                    child.push(children[i] as DOM | string);
                }
            }
        }
        dfs(children);
    }
    return DOM(tag, props, child);
};

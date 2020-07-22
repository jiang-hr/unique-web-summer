### 从 7-22 到 7-23

其实我7-22是非常急的，因为我时间非常紧张，v-dom这一天并没有怎么写，但这一个星期一直大致是拼了命的做事。

最大的两件事就是这个联创和数学建模比赛。

在学习promise/A+时已经花掉了整整两天时间，后面花了接近3天的时间做数学建模比赛国赛的华中大选拔（单人完成一个正规3人团队3天的比赛，虽然题目肯定比正规比赛简单，但也挺要命的）。

> 居然Matlab从0基础，直接到能用matlab写程序了。（题外话

在接近1星期前学习了vdom是什么，当然vdom是什么太简单了，就是对真实dom的一个虚拟，真实dom变成js对象。数模比赛结束之后（其实在数模比赛之前到写完生成vdom的createElement之间的时间），我一直搞不明白vdom到底是干啥用的，render函数到底是干啥的，更何谈diff算法。 

之后花了1天半的时间学习react，终于弄懂了如何用react写界面，顺带知道了jsx之类。

7-22中午正式开始写接着createElement的函数之后的内容，当然我发现了虚拟dom里面其实声明是不对的，这是20_07_18.md当中的声明，它当中的children: Array<ArrayOrElement<DOM> | string> | ArrayOrElement<DOM> | string,造成了严重的后果。

```typescript
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
```

我花了时间调整它，就简单的声明成`children: Array<DOM | string>`就行了，虽然声明成这样底线又会报错，我花了一段时间解决。

render函数则分成了两部分递归调用：

```typescript
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
```

一部分用vdom生成真实节点，一部分挂载这个节点。两边互相递归调用。
# VDOM-diff

现在流行的前端渲染框架(Vue, React..), Virtual DOM (虚拟DOM)几乎已经成了标配,通过这样一个缓冲层,能够实现对DOM的最少操作,在实际开发工作当中,操作DOM是比较慢的,因此Virtual DOM可以大大的提升性能



**真实dom**

```html
<ul id='list'>
  <li class='item'>itemA</li>
  <li class='item'>itemB</li>
</ul>
```

而我们在js中获取时，所用代码为：

```js
let trueDom = document.getElementById('list');
console.log(trueDom);
```



```html
<div class="chat-box">
    <p style="position: relative;" >
    	xxxxxx
    </p>
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
</div>
```

=> 虚拟DOM

```js
{
    tag: "div",
    props: {
        class: "chat-box"
    },
    children: [
        {
            tag: "p",
            props: {
                style: "position: relative;"
            },
            children: ["xxxxxx"]
        },
        {
            tag: "ul",
            props: {},
            children: [
                {
                    tag: "li",
                    props: {},
                    children: ["1"]
                },
                {
                    tag: "li",
                    props: {},
                    children: ["2"]
                }
            ]
        }
    ]
}
```


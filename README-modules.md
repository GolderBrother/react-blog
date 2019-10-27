```markdown-navbar```组件
```markdown-navbar```组件是一款第三方提供的组件，因为这个是比较小众的需求，所以使用的人并不多。目前只有18star,这个是国人开发的，我用起来还不错，希望作者可以一直维护下去（目前开来是不进行维护了，但是用起来还是挺好用）。

[github:markdown-navbar](https://github.com/parksben/markdown-navbar)

```markdown-navbar```的基本属性：

- className： 可以为导航定义一个class名称，从而进行style样式的定义。
- source：要解析的内容，也就是你的Markdown内容。
- headingTopOffset:描点距离页面顶部的位置，默认值是0.
- ordered: 显示数字编码，默认是显示的，也就是true，设置为false就不显示了。

### markdown-navbar的安装和使用
用npm install进行安装，命令如下：

```npm install --save markdown-navbar```

用yarn add进行安装，命令如下：

```yarn add markdown-navbar```
安装完成后，直接在要使用的页面用import进行引入,需要注意的是你还需要引入css。

```js
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
```

```js
<MarkNav
    className="article-menu"
    source={markdown}
    ordered={false}
/>
```



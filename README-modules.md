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

### Next.js相关

```getiInitialProps```

这个 getiInitialProps 是 Next.js 最伟大的发明，它确定了一个规范，一个页面组件只要把访问 API 外部资源的代码放在 getInitialProps 中就足够，其余的不用管，Next.js 自然会在服务器端或者浏览器端调用 getInitialProps 来获取外部资源，并把外部资源以 props 的方式传递给页面组件。

注意 getInitialProps 是页面组件的静态成员函数，可以用下面的方法定义：

```Home.getInitialProps = async () = {...};```

也可以在组件类中加上 static 关键字定义：

```
class Home extends React.Component {
  static async getInitialProps() {
     ...
  }
}
```

通过上面的代码，我么也可以注意到，getInitialProps 是一个 async 函数，所以，在 getInitialProps 函数中可以使用 await 关键字，用同步的方式编写异步逻辑。

我们可以这样来看待 getInitialProps，它就是 Next.js 对代表页面的 React 组件生命周期的扩充。React 组件的生命周期函数缺乏对异步操作的支持，所以 Next.js 干脆定义出一个新的生命周期函数 getInitialProps，在调用 React 原生的所有生命周期函数之前，Next.js 会调用 getInitialProps 来获取数据，然后把获得数据作为 props 来启动 React 组件的原生生命周期过程。

这个生命周期函数的扩充十分巧妙，因为：

1.没有侵入 React 原生生命周期函数，以前的 React 组件该怎么写还是怎么写；
2.getInitialProps 只负责获取数据的过程，开发者不用操心什么时候调用 getInitialProps，依然是 React 哲学的声明式编程方式；
3.getInitialProps 是 async 函数，可以利用 JavaScript 语言的新特性，用同步的方式实现异步功能。


### Next.js 的“脱水”和“注水”

我们说过服务器端渲染的关键是如何“脱水”和“注水”，如果你对 Next.js 如何实现这两个关键点好奇（实际上你确实应该感到好奇），那么在浏览器中使用“显示网页源代码”就可以让你一目了然。

在网页的 HTML 中，可以看到类似下面的内容：

```js
<script>
  __NEXT_DATA__ = {
    "props":{
      "pageProps": {"userName":"Morgan"}},
      "page":"/","pathname":"/","query":{},"buildId":"-","assetPrefix":"","nextExport":false,"err":null,"chunks":[]}
</script>
```

Next.js 在做服务器端渲染的时候，页面对应的 React 组件的 getInitialProps 函数被调用，异步结果就是“脱水”数据的重要部分，除了传给页面 React 组件完成渲染，还放在内嵌 script 的```__NEXT_DATA__```中，这样，在浏览器端渲染的时候，是不会去调用 getInitialProps 的，直接通过```__NEXT_DATA__```中的“脱水”数据来启动页面 React 组件的渲染。

这样一来，如果 getInitialProps 中有调用 API 的异步操作，只在服务器端做一次，浏览器端就不用做了。

那么，getInitialProps 什么时候会在浏览器端调用呢？

当在单页应用中做页面切换的时候，比如从 Home 页切换到 Product 页，这时候完全和服务器端没关系，只能靠浏览器端自己了，Product页面的 getInitialProps 函数就会在浏览器端被调用，得到的数据用来开启页面的 React 原生生命周期过程。

关键点是，浏览器可能会直接访问 /home 或者 /product，也可能通过网页切换访问这两个页面，也就是说 Home 或者 Product 都可能被服务器端渲染，也可能完全只有浏览器端渲染，不过，这对应用开发者来说无所谓，应用开发者只要写好 getInitialProps，至于调用 getInitialProps 的时机，交给 Next.js 处理就好了。

你可以发明自己的服务器端框架，但很可能最后你发现，如果要做得通用性好，最后都会做到和 Next.js 一样的模式上来。

值得一提的是，getInitialProps 返回的应该是“纯数据”，也就是不要返回一个定制类的实例。比如，有一个类 Foo 有一个成员函数 bar，不要在 getInitialProps 返回一个 Foo 实例。不然，经过“脱水”和“注水”过程，网页组件获得的那个“Foo 实例”不再是你想的那个 Foo 实例了，它变成了一个纯粹的数据，不会包含成员函数 bar的。

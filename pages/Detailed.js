/*
 * @Author: golderBrother
 * @Date: 2019-10-27 17:19:48
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-29 18:26:47
 * @Description: 博客的详情页
 */

import React from "react";
import Head from "next/head";
import { Affix, Breadcrumb, Col, Row, Icon } from "antd";
// react-markdown是react专用的markdown解析组件
// https://github.com/rexxars/react-markdown
// https://rexxars.github.io/react-markdown/
// react-markdown,这个插件的配置项还是太少了,marked+highlight 是比较成熟的，所以更换插件: react-markdown -> marked+highlight
// import ReactMarkdown from "react-markdown";
import marked from 'marked';
import hljs from 'highlight.js';
// 提供了不同IDE的代码显示样式，可以自主选择
import 'highlight.js/styles/monokai-sublime.css';
// import MarkdownNavbar from "markdown-navbar";
// import "markdown-navbar/dist/navbar.css";
import axios from "axios";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import Tocify from "../components/Tocify.tsx";
import servicePath from '../config/apiUrl'
import "../static/style/pages/detailed.css";
/* const markdown =
  "# P01:课程介绍和环境搭建\n" +
  "[ **Markdown** ] + [ **Editor** ] = **Mditor**  \n" +
  "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
  "**这是加粗的文字**\n\n" +
  "*这是倾斜的文字*`\n\n" +
  "***这是斜体加粗的文字***\n\n" +
  "~~这是加删除线的文字~~ \n\n" +
  "`console.log(111)` \n\n" +
  "# p02:来个Hello World 初始Vue3.0\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n" +
  "***\n\n\n" +
  "# p03:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "# p04:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "# p05:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "# p06:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "# p07:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "``` var a=11; ```"; */


const Detailed = (props = {}) => {
  console.log('props data: ', props);
  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  // https://marked.js.org/#/USING_ADVANCED.md
  // 需要对marked的渲染进行自定义，这时候需要设置renderer.heading，就是写一个方法们重新定义对#这种标签的解析
  renderer.heading = function(text, level, raw){
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" className="anchor-fix">
        <h${level}>{text}</h${level}>
      </a>\n`;
  }
  marked.setOptions({
    renderer: renderer, // 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    pedantic: false, // 启动类似Github样式的Markdown,填写true或者false
    gfm: true, // 启动类似Github样式的Markdown,填写true或者false
    tables: true, // 支持Github形式的表格，必须打开gfm选项
    breaks: false, // 支持Github换行符，必须打开gfm选项，填写true或者false
    sanitize: false, // 如果为true，请使用sanitizer函数对传递给markdownString的HTML进行清理。
    smartLists: true, // 优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
    smartypants: false, // 如果为true，对引号和破折号使用“智能”印刷标点符号。
    highlight: function(code){  // 高亮显示规则 ，这里我们将使用highlight.js来完成
      return hljs.highlightAuto(code).value // 增加Code的高亮显示
    }
  })
  console.log("props.article_content", props.article_content)
  // props.article_content = props.article_content + `### test`;
  const html = marked(props.article_content);
  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="breadcrumb-container">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
  
            <div>
              <div className="detailed-title">
                {props.title}
              </div>
  
              <div className="list-icon center">
                <span>
                  <Icon type="calendar" /> {props.addTime}
                </span>
                <span>
                  <Icon type="folder" /> {props.typeName}
                </span>
                <span>
                  <Icon type="fire" /> {props.view_count}人
                </span>
              </div>
  
              <div className="detailed-content" dangerouslySetInnerHTML={{__html: html}}>
                {/* <ReactMarkdown
                  source={markdown}
                  // Setting to false will cause HTML to be rendered
                  escapeHtml={false}
                /> */}
              </div>
            </div>
          </div>
        </Col>
  
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          {/* 使得导航一直在页面的右侧 */}
          <Affix>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
              {/* <MarkdownNavbar
                className="article-menu"
                source={markdown}
                ordered={false}
              /> */}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
Detailed.getInitialProps = async (props) => {
  // 获取文章详情数据
  console.log(props.query.id);
  let id = props.query.id;
  const result = await new Promise(async resolve => {
    const {data} = await axios.get(`${servicePath.getArticleById}/${id}`) || {};
    console.log(data);
    const detailedData = (data && data[0]) || {};
    resolve(detailedData)
  });
  return result;
}
export default Detailed;

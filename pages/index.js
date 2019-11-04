import React, { useState, useEffect } from "react";
import Head from "next/head";
// Error:./node_modules/postcss-preset-env/index.mjs
// Can't import the named export 'feature' from non EcmaScript module (only default export is available)
// import { Link } from 'next'
import Link from "next/link";
import { Col, Row, List, Icon } from "antd";
import axios from "axios";
// 对Markdown语法的解析需要引入的模块
import marked from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import servicePath from "../config/apiUrl";
import "../static/style/pages/index.css";

const Home = props => {
  const [myList, setMyList] = useState([...(props.list || [])]);
  const [type, setType] = useState(props.type || "");
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const selectedKey = props.query && props.query.id && props.query.id.toString() || "0";
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header type={type} selectedKey={selectedKey} />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="list-container">
            <List
              header={<div className="list-head">最新日志</div>}
              itemLayout="vertical"
              dataSource={myList}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    {/* 可以使用<Link prefetch>使链接和预加载在后台同时进行，来达到页面的最佳性能。 */}
                    <Link
                      prefetch
                      href={{ pathname: "/detailed", query: { id: item.id } }}
                    >
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span>
                      <Icon type="calendar" />
                      {item.addTime}
                    </span>
                    <span>
                      <Icon type="folder" />
                      {item.typeName}
                    </span>
                    <span>
                      <Icon type="fire" />
                      {item.view_count}人
                    </span>
                  </div>
                  {/* dangerouslySetInnerHTMl 是React标签的一个属性，类似于angular的ng-bind；既可以插入DOM，又可以插入字符串，用来解析html字符胡灿或者DOM */}
                  {/* 注意：dangerouslySetInnerHTML定义的标签里面不能包含任何内容, 包括内容 */}
                  <div className="list-context" dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}></div>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>

      <Footer />

      <style jsx>{`
        body {
          background-color: #f6f6f6;
        }
      `}</style>
    </div>
  );
};

// 我们可以这样来看待 getInitialProps，它就是 Next.js 对代表页面的 React 组件生命周期的扩充。React 组件的生命周期函数缺乏对异步操作的支持，所以 Next.js 干脆定义出一个新的生命周期函数 getInitialProps，在调用 React 原生的所有生命周期函数之前，Next.js 会调用 getInitialProps 来获取数据，然后把获得数据作为 props 来启动 React 组件的原生生命周期过程。
// Next.js 在做服务器端渲染的时候，页面对应的 React 组件的 getInitialProps 函数被调用，异步结果就是“脱水”数据的重要部分，除了传给页面 React 组件完成渲染，还放在内嵌 script 的 __NEXT_DATA__ 中，这样，在浏览器端渲染的时候，是不会去调用 getInitialProps 的，直接通过 __NEXT_DATA__ 中的“脱水”数据来启动页面 React 组件的渲染。
Home.getInitialProps = async () => {
  /* let result = {
    list: [],
    type: ""
  }
  return result */
  try {
    const result = await new Promise(async (resolve, reject) => {
      const { data } = (await axios.get(servicePath.getArticleList)) || {};
      console.log(data);
      resolve(data);
    })
      .then(res => res)
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
    return result || {};
  } catch (error) {
    throw new Error(error);
  }
};

export default Home;

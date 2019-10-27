/*
 * @Author: golderBrother
 * @Date: 2019-10-27 17:19:48
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-27 18:29:45
 * @Description: 博客的详情页
 */

import React from "react";
import Head from "next/head";
import { Affix, Breadcrumb, Col, Row, Icon } from "antd";
// react-markdown是react专用的markdown解析组件
// https://github.com/rexxars/react-markdown
// https://rexxars.github.io/react-markdown/
import ReactMarkdown from "react-markdown";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/detailed.css";
const markdown =
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
  "``` var a=11; ```";
const Details = () => (
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
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              <Breadcrumb.Item>xxxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div>
            <div className="detailed-title">
              React实战视频教程-技术胖Blog开发(更新08集)
            </div>

            <div className="list-icon center">
              <span>
                <Icon type="calendar" /> 2019-06-28
              </span>
              <span>
                <Icon type="folder" /> 视频教程
              </span>
              <span>
                <Icon type="fire" /> 5498人
              </span>
            </div>

            <div className="detailed-content">
              <ReactMarkdown
                source={markdown}
                // Setting to false will cause HTML to be rendered
                escapeHtml={false}
              />
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
            <MarkdownNavbar
              className="article-menu"
              source={markdown}
              ordered={false}
            />
          </div>
        </Affix>
      </Col>
    </Row>
    <Footer />
  </>
);

export default Details;

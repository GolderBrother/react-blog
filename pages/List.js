/*
 * @Author: golderBrother
 * @Date: 2019-10-27 17:20:30
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-11-04 15:42:56
 * @Description: 博客的列表页
 */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from 'axios';
import { Breadcrumb, Col, Row, List, Icon } from "antd";
import servicePath from '../config/apiUrl'
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import "../static/style/pages/list.css";

const ArticleList = (props) => {
  const [myList, setMyList] = useState(
    props.data || []
  );
  useEffect(() => {
    setMyList(props.data)
  }, [props.url.asPath]);
  function getNavById(props){
      const {id = ""} = props.url && props.url.query || {};
      const typeMap = new Map([["1", "视频教程"], ["2", "瘦子张"], ["3", "快乐生活"]]);
      let navTitle = typeMap.get(id) || "";
      return navTitle;
  }
  const selectedKey = props.url && props.url.query && props.url.query.id || "0";
  return (
    <>
      <Head>
        <title>博客列表页</title>
      </Head>
      <Header selectedKey={selectedKey} />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="list-container">
            <div className="breadcrumb-container">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{getNavById(props)}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              header={<div className="list-head">最新日志</div>}
              itemLayout="vertical"
              dataSource={myList}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{ pathname: "/detailed", query: {id: item.id} }}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span>
                      <Icon type="calendar" /> {item.addTime}
                    </span>
                    <span>
                      <Icon type="folder" /> {item.typeName}
                    </span>
                    <span>
                      <Icon type="fire" /> {item.view_count}人
                    </span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
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
    </>
  );
};

ArticleList.getInitialProps = async (context) => {
  console.log(context);
  const {id = ""} = context.query || {};
  const result = await new Promise((resolve) => {
    axios.get(`${servicePath.getListById}/${id}`).then(res => resolve(res.data));
  });
  return result;
}

export default ArticleList;

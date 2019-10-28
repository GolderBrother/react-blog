import React, {useState} from 'react'
import Head from 'next/head'
import { Link } from 'next'
import { Col, Row, List, Icon } from 'antd'
import axios from 'axios';
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import servicePath from '../config/apiUrl'
import "../static/style/pages/index.css"

const Home = (res) => {
  console.log('props data: ', res);
  const [myList, setMyList] = useState([...res.data]);
  const [type, setType] = useState(res.type);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header type={type} />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          左侧
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
          <Author />
          <Advert />
        </Col>
      </Row>
      <div className="list-container">
        <List 
          header={<div>最新日志</div>}
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
                <span><Icon type="calendar" />{item.addTime}</span>
                <span><Icon type="folder" />{item.typeName}</span>
                <span><Icon type="fire" />{item.view_count}人</span>
              </div>
              <div className="list-context">{item.context}</div>  
            </List.Item>
          )}
        />
      </div>
      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  try {
    const result = await new Promise(async (resolve, reject) => {
      const { data } = await axios.get(servicePath.getArticleList) || {};
      resolve(data);
    });
    console.log('getInitialProps result: ', result)
    return result;
  } catch (error) {
    throw new Error(error)
  }
}

export default Home

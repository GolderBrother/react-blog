import React, { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col,
  Input,
  Select,
  Button,
  DatePicker
} from "antd";
import { Route } from "react-router-dom";
import AddArticle from "./AddArticle";
import "../styles/home.css";
const { Option } = Select;
const { TextArea } = Input;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function Home(props) {
  const [collapsed, setCollapsed] = useState(false);
  function onCollapse(collapsed) {
    setCollapsed(collapsed);
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Row gutter={5}>
              <Col span={18}>
                <Row gutter={10}>
                  <Col span={20}>
                    <Input placeholder="博客标题" size="large" />
                  </Col>
                  <Col span={4}>
                    <Select defaultValue="Sign Up" size="large">
                      <Option value="Sign Up"> 视频教程</Option>
                    </Select>
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col span={12}>
                    <TextArea
                      className="markdown-content"
                      rows={35}
                      placeholder="文章内容"
                    />
                  </Col>
                  <Col span={12}>
                    <div className="show-html"></div>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                {/* <div className="add-article">
                <div>
                    <Route path="/index/" component={AddArticle} />
                </div>
                </div> */}
                <Row>
                  <Col span={12}>
                    <Button size="large">暂存文章</Button>&nbsp;
                    <Button type="primary" size="large" onClick={}>
                      发布文章
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <br />
                    <TextArea rows={4} placeholder="文章简介" />
                    <br />
                    <br />
                    <div className="introduce-html"></div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div className="date-select">
                      <DatePicker placeholder="发布日期" size="large" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
export default Home;

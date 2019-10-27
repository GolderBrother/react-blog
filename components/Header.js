/*
 * @Author: golderBrother
 * @Date: 2019-10-26 16:50:39 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-27 17:14:07
 * @Description: 博客的头部每个页面都一样，所以制作成一个组件。这样就可以保持每个博客的页面头部都是统一的，而且易于上线后的维护。 
 */
/* 
Ant Design做好了栅格化系统，可以适配多种屏幕，简单理解成把页面的分成均等的24列，然后进行布局。
需要对适配几个属性熟悉一下：

xs: <576px响应式栅格。
sm：≥576px响应式栅格.
md: ≥768px响应式栅格.
lg: ≥992px响应式栅格.
xl: ≥1200px响应式栅格.
xxl: ≥1600px响应式栅格. 
*/

import React from 'react'
import { Row, Col, Icon, Menu } from 'antd'
import "../static/style/components/header.css"

const Header = (props) => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={24} lg={15} xl={12} xxl={10}>
                <span className="header-logo">golderBrother</span>
                <span className="header-text">95年前端小菜鸟一只~</span>
            </Col>
            <Col className="menu-container">
            <Menu  mode="horizontal" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu.Item key="home">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <Icon type="fire" />
                    学习
                </Menu.Item>
                <Menu.Item key="life">
                    <Icon type="smile" />
                    生活
                </Menu.Item>
            </Menu>
            </Col>
        </Row>
    </div>
)

export default Header
/*
 * @Author: golderBrother
 * @Date: 2019-10-27 17:44:53 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-11-04 13:45:53
 * @Description: 博主介绍组件 
 */

import React from 'react'
import { Avatar, Divider } from 'antd'
import "../static/style/components/author.css"
const Author = (props) => {
    return (
        <div className="author-container comm-box">
            <div> <Avatar size={100} src="https://avatars1.githubusercontent.com/u/26534692?s=460&v=4"/></div>
            <div className="author-introduction">
                golderBrother95年前端小菜鸟一只~
                此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
            </div>
        </div>
    )
}

export default Author
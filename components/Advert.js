/*
 * @Author: golderBrother
 * @Date: 2019-10-27 17:45:23 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-29 18:26:06
 * @Description: 通用广告组件 
 */

import React from 'react'
import '../static/style/components/advert.css'
const Advert = (props) => {
    return (
        <div className="advert-container comm-box">
            <div><img src="http://img.golderbrother.cn/cache1.png" width="100%" /></div>
            <div><img src="http://img.golderbrother.cn/cache2.png" width="100%" /></div>
            <div><img src="http://img.golderbrother.cn/frontend.jpg" width="100%" /></div>
            <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
        </div>
    )
}

export default Advert
 

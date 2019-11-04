/*
 * @Author: golderBrother
 * @Date: 2019-11-04 11:05:01 
 * @Last Modified by:  james.zhang 
 * @Last Modified time: 2019-11-04 11:05:01 
 * @Description: 博客底部组件 
 */

import React from 'react'
import '../static/style/components/footer.css'
const Footer = (props) => {
    return (
        <div className="footer-container">
            <div>系统由 React+Node+Ant Desgin 驱动 </div>
            <div>
                <a href="http://www.golderbrother.cn/">http://www.golderbrother.cn/</a>
            </div>
        </div>
    )
}

export default Footer

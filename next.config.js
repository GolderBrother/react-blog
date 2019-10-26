/*
 * @Author: golderBrother
 * @Date: 2019-10-26 16:27:07 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-26 16:44:46
 * @Description: 这个就是Next.js的总配置文件 
 */
// 这个的主要功能就是让Next.js可以加载CSS文件，有了这个包才可以进行配置。
const withCss = require('@zeit/next-css');
// 这样我们的Next.js就支持CSS文件了。
if(typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}
module.exports = withCss({});


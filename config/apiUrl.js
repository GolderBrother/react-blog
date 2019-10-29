/*
 * @Author: golderBrother
 * @Date: 2019-10-29 13:53:12 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-10-29 18:27:01
 * @Description: api接口地址
 */

const apiBaseUrl = 'http://127.0.0.1:7001/default/';
const servicePath = {
    getArticleList: `${apiBaseUrl}getArticleList`,
    getArticleById: `${apiBaseUrl}getArticleById`
}
export default servicePath
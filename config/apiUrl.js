/*
 * @Author: golderBrother
 * @Date: 2019-10-29 13:53:12 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-11-04 11:34:02
 * @Description: api接口地址
 */

const apiBaseUrl = 'http://127.0.0.1:7001/default/';
const servicePath = {
    getArticleList: `${apiBaseUrl}getArticleList`,
    getArticleById: `${apiBaseUrl}getArticleById`,
    getTypeInfo: `${apiBaseUrl}getTypeInfo`,
    getListById: `${apiBaseUrl}getListById`
}
export default servicePath
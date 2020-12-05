/*
 * @Author: Dongshufeng
 * @Date: 2020-12-05 15:43:09
 * @LastEditTime: 2020-12-05 18:42:49
 * @LastEditors: Please set LastEditors
 * @Description: 检验 graphql package 下载情况
 * @FilePath: \myLearn-GraphQL\hello.js
 */

 const { graphql, buildSchema } = require('graphql')

 const scheam = buildSchema(`
    type Query {
        hello: String
    }
 `)

 const root = { hello : ()=> `Hello world!！！！`}

 graphql(scheam,`{ hello }`, root).then((response) => {
     console.log(response)
 })

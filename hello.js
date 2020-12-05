/*
 * @Author: your name
 * @Date: 2020-12-05 15:43:09
 * @LastEditTime: 2020-12-05 16:17:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
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

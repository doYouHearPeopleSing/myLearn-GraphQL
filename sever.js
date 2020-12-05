/*
 * @Author: Dongshufeng
 * @Date: 2020-12-05 16:57:45
 * @LastEditTime: 2020-12-05 18:43:09
 * @LastEditors: Please set LastEditors
 * @Description: GraphQL express test
 * @FilePath: \myLearn-GraphQL\sever.js
 */

const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

/**
 * @description: 定义schema、查询和类型
 */
const schema = buildSchema(`
  type Account {
      name: String
      age: Int
      sex: String
  }

  type Query {
    hello: String
    accountName: String
    age: Int
    account: Account
  }

`)


/**
 * @description: 返回值类型与 schema 要对应
 */
const root = { 
    hello: () => 'Hello world!' ,
    accountName: () => 'Dong shu feng',
    age: () => 23,
    account: () => {
        return {
            name: 'DongShufeng',
            age: 22,
            sex: 'male'
        }
    }
}

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,

/**
 * graphiql : bool 是否启用调试
 */  

}))


app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
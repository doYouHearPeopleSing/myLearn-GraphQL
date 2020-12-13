/*
 * @Author: your name
 * @Date: 2020-12-07 13:55:28
 * @LastEditTime: 2020-12-07 15:39:57
 * @LastEditors: Please set LastEditors
 * @Description:  
 * Practice about ARGUMENTS and TYPE
 * @FilePath: \myLearn-GraphQL\sever2.js
 */


const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

/**
 * @description: 定义schema、查询和类型
 */
const schema = buildSchema(`

    type Account {
        name : String
        age : Int
        sex : String
        fuck : String
        grade( major : String ) : Int
    }
    type Query {
        getArrayOfStr( arrayNo: Int! ): [String]
        account( studentName : String ): Account
    }
    
`)


/**
 * @description: 返回值类型与 schema 要对应 
 * 查询对应的处理器
 */
const root = { 
    getArrayOfStr({ arrayNo }) {
        
        const obj = {
            1: ['a','b'],
            2: ['c','d'],
            3: ['e','f']
        }
        
        return obj[arrayNo]
    },

    account({ studentName }) {
        const name = studentName
        const sex = 'man'
        const age = 18
        const fuck = 'yes'
        const grade = ({ major }) => {
            switch( major ) {
                case 'Chinese' : return 60 
                case 'Math'    : return 70 
            }
        }

        return {
            name,
            sex,
            age,
            fuck,
            grade
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
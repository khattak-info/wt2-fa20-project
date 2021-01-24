const {gql} = require('apollo-server-express')

const typeDefs = gql`
  type Query{
    greetings:String
  }
`

module.exports = typeDefs
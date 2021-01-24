const {gql} = require('apollo-server-express')

const typeDefs = gql`
  scalar JSON

  type Query{
    greetings:String,
    getStudents:[JSON]
  }
  type Mutation{
    addStudent(dataObj:JSON):[JSON]
    editStudent(dataObj:JSON):JSON
    deleteStudents(ids:[String]):[JSON]
  }
`

module.exports = typeDefs
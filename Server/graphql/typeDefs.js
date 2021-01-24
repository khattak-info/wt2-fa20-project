const {gql} = require('apollo-server-express')

const typeDefs = gql`
  scalar JSON

  type Query{
    greetings:String,
    getStudents:[JSON],
    getStudent(id:String):JSON,
  }
  type Mutation{
    addStudent(dataObj:JSON):JSON
    editStudent(dataObj:JSON):JSON
    deleteStudents(dataObj:[String]):[JSON]
  }
`

module.exports = typeDefs
const StudentService = require("../Components")

const resolvers = {
    Query: {
        greetings: () => "Hello Aliens!",
        getStudents: StudentService.controller.getStudents,
        getStudent:StudentService.controller.getStudent,
    },
    Mutation: {
        addStudent: StudentService.controller.addStudent,
        deleteStudents: StudentService.controller.deleteStudents,
        editStudent: StudentService.controller.editStudent,
    }
}

module.exports = resolvers
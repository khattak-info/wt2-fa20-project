const Student = require("../Database")

const self={
    getStudents:async(root,args,ctx)=>{
        let students = Student.find({})
        return students
    },
    addStudent:async(root,args,ctx)=>{},
    deleteStudents:async(root,args,ctx)=>{},
    editStudent:async(root,args,ctx)=>{},
}

module.exports = self
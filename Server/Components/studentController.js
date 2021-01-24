const Student = require("../Database")

const self={
    getStudents:async(root,args,ctx)=>{
        let students = Student.find({}).select(["name","cms","email","createdAt"])
        return students
    },
    getStudent:async(root,args,ctx)=>{
        let student = await Student.findById(args.id)
        return student
    },
    addStudent:async(root,args,ctx)=>{
        return await Student.create(
			{ ...args.dataObj }
		)
    },
    deleteStudents:async(root,args,ctx)=>{
        await Student.deleteMany({ _id: { $in: args.dataObj } })
        let students = await Student.find({})
        return students
    },
    editStudent:async(root,args,ctx)=>{
        return await Student.findByIdAndUpdate(
			args.dataObj._id,
			{ ...args.dataObj },
			{ new: true }
		)
    },
}

module.exports = self
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    cms:{
        type:Number,
        required:true
    },
    profile:{
        type:String,
        default:"https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
    },
    bio:{
        type:String,
        default:""
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    github:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    }
})

module.exports = StudentSchema
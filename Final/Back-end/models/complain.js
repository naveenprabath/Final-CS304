//const bcrypt = require('bcrypt');
//const hash = bcrypt.hash; 

//const validator = require('validator');
//onst isEmail = validator.isEmail; 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complainSchema = new Schema({
   
    studentId:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    combination:{
        type:String,
        //unique:true,
        required:true
       // validate:[isEmail,'invalid email']
    },
    description:{
        type:String,
        required:true
    }
},
{timestamps: true ,
})

// studentSchema.pre('save',async function (next){
//     const student =this;
//     if(studentSchema.isModified('password')){
//         studentSchema.password = await
//         hash(student.password,10);
//     }
//     next();
// })

const complain = mongoose.model('complain',complainSchema);
module.exports = complain;

//const bcrypt = require('bcrypt');
//const hash = bcrypt.hash; 

//const validator = require('validator');
//onst isEmail = validator.isEmail; 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clearenceReportSchema = new Schema({
    studentName:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        //unique:true,
        required:true
       // validate:[isEmail,'invalid email']
    },
    combination:{
        type:String,
        required:true
    },
    clearenceDescription:{
        type:String,
        required:true
    },
    totalAmount:{
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

const clearenceReport = mongoose.model('clearenceReport',clearenceReportSchema);
module.exports = clearenceReport;

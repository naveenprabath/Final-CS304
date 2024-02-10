//const bcrypt = require('bcrypt');
//const hash = bcrypt.hash; 

//const validator = require('validator');
//onst isEmail = validator.isEmail; 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slipManagementSchema = new Schema({
    bankName:{
        type:String,
        required:true
    },
    idNumber:{
        type:String,
        required:true
    },
    slipId:{
        type:String,
        //unique:true,
        required:true
       // validate:[isEmail,'invalid email']
    },
    amount:{
        type:String,
        required:true
    },
    slipFile: {
        data: Buffer,
        contentType: String,
        filename: String,
        //required:false
    },
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

const slipManagement = mongoose.model('slipManagement',slipManagementSchema);
module.exports = slipManagement;

const bcrypt = require('bcrypt');
//const hash = bcrypt.hash; 

//const validator = require('validator');
//onst isEmail = validator.isEmail; 

const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const academicStaffSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        //unique:true,
        required:true
        //validate: [validator.isEmail,'invalid email']
    },
    contactNumber:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    password:{
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

academicStaffSchema.pre("save", async function (next) {
    const academicStaff = this;
    if (academicStaffSchema.isModified("password")) {
      academicStaff.password = await bcrypt.hash(academicStaff.password, 10);
    }
    next();
  });

  academicStaffSchema.plugin(passportLocalMongoose);

const academicStaff = mongoose.model('academicStaff',academicStaffSchema);
module.exports = academicStaff;

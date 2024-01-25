const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true, // Enforce email uniqueness
    required: true,
    validate: [validator.isEmail, "invalid email"], // Validate email format
  },
  contactNumber: {
    type: String,
    required: true,
  },
  combination: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Hash passwords before saving
studentSchema.pre("save", async function (next) {
  const student = this;
  if (studentSchema.isModified("password")) {
    student.password = await bcrypt.hash(student.password, 10);
  }
  next();
});

// Add passport-local-mongoose plugin for authentication
studentSchema.plugin(passportLocalMongoose);

const student = mongoose.model("student", studentSchema);
module.exports = student;

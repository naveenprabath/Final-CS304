const router = require("express").Router();
const student = require("../models/student"); // Use const for constants
const jwt = require("jwt-simple");
const passport = require("passport");
const studentController = require("../controllers/studentController");
 
router.get("/", async (req, res) => {
  try {
    const students = await student.find();
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: "Error retrieving students" });
  }
});

// Signup route (corrected)
router.route("/Signup").post(async (req, res) => {
  try {
    const {
      fullName,
      studentId,
      email,
      contactNumber,
      combination,
      password,
    } = req.body;

    const newStudent = new student({
      fullName,
      studentId,
      email,
      contactNumber,
      combination,
      password,
    });

    await newStudent.save();
    res.json("User added");
  } catch (error) {
    res.status(400).json({ error: "Error creating user" });
  }
});


router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  studentController.login
);

module.exports = router;

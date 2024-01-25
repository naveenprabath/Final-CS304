const student = require("../models/student");
const config = require("../config/config");
const jwt = require("jwt-simple");

exports.login = async function (req, res) {
  try {
    const studentRef = await student.findOne({ email: req.body.email });
    console.log(studentRef)

    if (!studentRef) {
      res.status(401).json({ error: "Invalid email or password" });
    } else {
      const payload = {
        id: studentRef._id, // Use student ID for authentication
        expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
      };

      const token = jwt.encode(payload, config.jwtSecret);

      res.json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.profile = async function (req, res) {
  try {
    const decoded = jwt.decode(req.query.secret_token, config.jwtSecret);

    if (!decoded) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }

    const student = await student.findById(decoded.id);

    if (!student) {
      res.status(404).json({ error: "Student not found" });
      return;
    }

    res.json({
      message: "You made it to the secured profile",
      student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

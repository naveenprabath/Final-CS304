const academicStaff= require("../models/academicStaff");
const config = require("../config/config");
const jwt = require("jwt-simple");
// const academicStaff = require("../models/academicStaff");

exports.login = async function (req, res) {
  try {
    const academicStaffRef = await academicStaff.findOne({ email: req.body.email });
    console.log(academicStaffRef)

    if (!academicStaffRef) {
      res.status(401).json({ error: "Invalid email or password" });
    } else {
      const payload = {
        id: academicStaffRef._id, // Use staff ID for authentication
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

    const academicStaff = await academicStaff.findById(decoded.id);

    if (!academicStaff) {
      res.status(404).json({ error: " Not found" });
      return;
    }

    res.json({
      message: "You made it to the secured profile",
      academicStaff,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

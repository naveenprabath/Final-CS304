
const student = require("../models/student")
const config = require("../config/config")
const jwt = require("jwt-simple");


exports.login = function (req, res) {
    console.log("ghgfhf");
  student.findOne({ email: req.body.email }, (then, student) => {
    if (then) {
      console.log("Error");
      res.json({ then: then })
    } else {
        var payload = { 
            password: student.password, 
            expire: Date.now() + 1000 * 60 * 60 * 24 * 7 
        }

      var token = jwt.encode(payload, config.jwtSecret)

      res.json({ token: token })
    }
  });
};


exports.profile = function(req, res) {
  res.json({
    message: 'You made it to the secured profile',
    student: req.student,
    token: req.query.secret_token
  })
}
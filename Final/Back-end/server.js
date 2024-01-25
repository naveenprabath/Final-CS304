const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const student = require("./models/student");
const studentController = require("./controllers/studentController");
const LocalStrategy = require("passport-local");
const bodyParser = require("body-parser");
const passport = require("passport");

// require("./middleware/auth.js")();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI); // Removed deprecated options

passport.serializeUser(student.serializeUser());
app.use(passport.initialize());
passport.use(
  new LocalStrategy({ usernameField: "email" }, async (username, password, done) => {
    try {
      const user = await student.findOne({ email: username });
      if (!user) {
        return done(null, false);
      }
      if (user.password != password) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

// ... rest of your code ...


app.use(bodyParser.urlencoded({ extended: false }));

//app.get('/', (req, res) => { res.send('Introduction JWT Auth') })
//app.get('/Profile', passport.authenticate('jwt', { session: false }),studentController.profile)
//app.post('/Login', passport.authenticate('local'), studentController.login)
//Connection to database checking
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to the database!");
});

app.get("/", (req, res) => {
  res.send("HEllo");
  // Render your home page component here
  res.send("Introduction JWT Auth");
  // res.render('Home'); // Assuming you have a 'home' component
});

//---------------------------------------------------------------------------------------------------

// Import your user model
//const student = require('./models/student').default; // Assuming your model is in a models folder

const studentRouter = require("./routes/studentRoute");
app.use("/student", studentRouter);

const academicStaffRouter = require("./routes/academicStaffRoute");
app.use("/academicStaff", academicStaffRouter);

const clearenceReportRouter = require("./routes/clearenceReportRoute");
app.use("/clearenceReport", clearenceReportRouter);

const complainRouter = require("./routes/complainRoute");
app.use("/complain", complainRouter);

const slipManagementRouter = require("./routes/slipManagementRoute");
app.use("/slipManagement", slipManagementRouter);

//-----------------------------------------------------------
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//---------------------------------------------------------

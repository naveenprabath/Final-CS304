const router = require("express").Router();
const academicStaff = require("../models/academicStaff");
const jwt = require("jwt-simple");
const passport = require("passport")
const academicStaffController = require("../controllers/academicStaffController");


router.get("/", async (req, res) => {
  try {
    const academicStaffs = await academicStaff.find();
    res.json(academicStaffs);
  } catch (error) {
    res.status(400).json({ error: "Error retrieving students" });
  }
});




//User login
/*router.post('/pages/login',(req,res)=>{
    const {email,password} = req.body
    const student = studnets.find((u)=>u.email === email);
    if(!student ||studnet.password!==password){
        return res.status(401).json({error:'Invalid email or password'});
    }
    res.status(200).json({message:'Login sucessful',user});
})*/

router.route("/AcademicStaffSignup").post(async(req, res) => {
  try{

  const { 
    fullName, 
    address, 
    email, contactNumber, 
    department, 
    password } =   req.body;

  const newAcademicStaff = new academicStaff({
    fullName,
    address,
    email,
    contactNumber,
    department,
    password,
  });

  await newAcademicStaff.save();
  res.json("Staff added");
} catch (error) {
  res.status(400).json({ error: "Error creating user" });
}
});

router.post(
  "/Login",
  passport.authenticate("local", { session: false }),
  academicStaffController.login
);
  



module.exports = router;

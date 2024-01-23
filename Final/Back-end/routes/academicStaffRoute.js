const router = require("express").Router();
let academicStaff = require("../models/academicStaff");

router.get("/", (req, res) => {
  academicStaff
    .find()
    .then((academicStaff) => res.json(academicStaff))
    .catch((err) => res.status(400).json("Error:" + err));
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

router.route("/AccademiStaffSignup").post((req, res) => {
  

  const { fullName, address, email, contactNumber, department, password } =
    req.body;

  var newAcademicStaff = {
    fullName,
    address,
    email,
    contactNumber,
    department,
    password,
  };

  console.log(newAcademicStaff)

  academicStaff
    .create(newAcademicStaff)
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;

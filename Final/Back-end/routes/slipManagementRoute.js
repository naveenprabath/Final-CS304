const router = require("express").Router();
let slipManagement = require("../models/slipManagement");

router.get("/", (req, res) => {
  slipManagement
    .find()
    .then((slipManagement) => res.json(slipManagement))
    .catch((err) => res.status(400).json("Error:" + err));
});

// //Create a new students
// router.post('/pages',(req,res)=>{
//     const {fullName,studentId,email,contactNumber,combination,password}=req.body;
//     const newStudent = {fullName:fullName,studentId:studentId,email:email,contactNumber:contactNumber,combination:combination,password:password};
//     newStudent.save;
//     res.status(201).json(newStudent);
// });

//User login
/*router.post('/pages/login',(req,res)=>{
    const {email,password} = req.body
    const student = studnets.find((u)=>u.email === email);
    if(!student ||studnet.password!==password){
        return res.status(401).json({error:'Invalid email or password'});
    }
    res.status(200).json({message:'Login sucessful',user});
})*/
//Signup...............................................................
router.route("/SlipManagement").post((req, res) => {
  // const fullName =req.body.fullName;
  // const studentId = req.body.studentId;
  // const email =req.body.email;
  // const contactNumber = req.body.contactNumber;
  // const combination = req.body.combination;
  // const password=req.body.password;
  // const newStudent = new studentModel({fullName,studentId,email,contactNumber,combination,password});

  const { studentId, bankName, slipId, amount, slipFile} =
    req.body;

  var newSlipManagement = {
    studentId,
    bankName,
    slipId,
    amount,
    slipFile,
 };

  console.log(newSlipManagement)

  slipManagement
    .create(newSlipManagement)
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;

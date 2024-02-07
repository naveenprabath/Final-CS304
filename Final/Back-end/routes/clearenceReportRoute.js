const router = require("express").Router();
let clearenceReport = require("../models/clearenceReport");

router.get("/", (req, res) => {
  clearenceReport
    .find()
    .then((clearenceReport) => res.json(clearenceReport))
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
router.route("/ADDClearance").post((req, res) => {
  const { studentName, studentId, email,  combination, clearenceDescription,status, totalAmount } =
    req.body;

  var newclearenceReport = {
    studentName,
    studentId,
    email,
    combination, 
    clearenceDescription,
    status,
    totalAmount,
  };

  console.log(newclearenceReport)

  clearenceReport
    .create(newclearenceReport)
    .then(() => res.json("Clearene report added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;

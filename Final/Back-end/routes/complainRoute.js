const router = require("express").Router();
let complain = require("../models/complain");

router.get("/", (req, res) => {
  complain
    .find()
    .then((complain) => res.json(complain))
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
router.route("/Complain").post((req, res) => {
  // const fullName =req.body.fullName;
  // const studentId = req.body.studentId;
  // const email =req.body.email;
  // const contactNumber = req.body.contactNumber;
  // const combination = req.body.combination;
  // const password=req.body.password;
  // const newStudent = new studentModel({fullName,studentId,email,contactNumber,combination,password});

  const {studentId, fullName, combination, description } =
    req.body;

  var newComplain = {
    studentId,
    fullName,
    combination,
    description
  };

  console.log(newComplain)

  complain
    .create(newComplain)
    .then(() => res.json("Complain added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await complain.findByIdAndDelete(id);
    res.json({ message: 'Complain deleted successfully' });
  } catch (error) {
    console.error('Error deleting clearance report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

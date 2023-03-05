const UserModel=require('../models/UserModel')
const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { findOne } = require('../models/UserModel');



const createUser= async(req,res)=>{
  try {
    let data=req.body
    const { fname, goals, barriers, activityLevel, gender, country, email, password, height, weight, goalweight,terms,username,age } = req.body;
    console.log(req.body)
    
    let bcryptPass=await bcrypt.hash(password,10)


    if (!fname || !goals || !barriers || !activityLevel || !gender || !country || !email || !password || !height || !weight || !goalweight) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });

    }
    if (!/^[a-zA-Z\s]*$/.test(fname)) {
      return res.status(400).json({ message: 'First name should only contain letters and spaces.' });
    }


    // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/.test(password)) {
    //   return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one letter and one number.' });
    // }
    const user = {
      fname,
      goals,
      barriers,
      activityLevel,
      gender,
      country,
      email,
      password: bcryptPass,
      height,
      weight,
      goalweight,
      terms,
      username,
      age
    };



    let create=await UserModel.create(user)
    return res.status(201).send({ status: true, message: 'Success', data: create })
  } catch (error) {
    return res.status(500).send({ status: false,  message: error.message })

  }


}



const loginUser = async function (req, res) {
    try {
      const body = req.body;
      if (Object.keys(body).length == 0)
        return res.status(400).send({ status: false, message: "Please fill data in body" });
  
      const { email, password } = body;
  
      if (!email)
        return res.status(400).send({ status: false, message: "Email is mandatory" });
      
  
      if (!password)
        return res.status(400).send({ status: false, message: "Please provide the password!!" });
  



      let checkUser = await UserModel.findOne({ email: email });
  
      if (!checkUser) {
        return res.status(401).send({ status: false, message: "User not found" });
      }
           let checkPassword = await bcrypt.compare(password, checkUser.password);

      if (!checkPassword)
      return res.status(400).send({ status: false, message: "Enter correct Password" });
    
  
      let createToken = jwt.sign(
        {
          userId: checkUser._id.toString(),
        },
        "user-secret-key", { expiresIn: "48 hr" }
      );
          
      return res.status(201).send({ status: true, message: "User login successfull", data: { userId: checkUser._id, token: createToken } });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

module.exports.createUser=createUser
module.exports.loginUser=loginUser
const checkouts = require("../models/checkoutSchema");
const users = require("../models/userSchema");

exports.userregister = async (req, res) => {
    const {name, phone, birth, gender, enrolledCourses } = req.body;

    if (!name || !phone || !email || !password || !birth || !gender ){
      return  res.status(401).json({message:"Fill all fields"})
    }

    try{
      const preuser = await users.findOne({phone:phone});

      if (preuser){
        return   res.status(200).json("User already exist")
      }
      else{
        const newuser = new users({
          name,
          phone,
          email,
          password,
          birth,
          gender,
          enrolledCourses,
        });
        const storeData= await newuser.save();
        res.status(200).json(storeData);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
  };

exports.checkout = async(req, res) => {
  try {
    console.log("checkout");
  }

  catch {
    console.log("checkout catch");
  }
}  
  
exports.enrolledcourses = async(req, res) => {
  try{
    console.log("entered try");
    const inputdata = await checkouts.find();
    console.log(inputdata);
  }
  catch {
    console.log("catch");
  }
}
const users = require("../models/userSchema");

exports.userregister = async (req, res) => {
    const {name, phone, mrn,  health, birth, gender } = req.body;

    if (!name || !phone || !mrn || !health || !birth || !gender  ){
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
          mrn,
          health,
          birth,
          gender
        });
        const storeData= await newuser.save();
        res.status(200).json(storeData);
      }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
      }
  };
  
  
const admins = require("../models/adminSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.key;

exports.adminregister = async (req, res) => {
    const { name, phone, email, password, birth, gender } = req.body;
    if (!name || !phone || !email || !password || !birth || !gender) {
        return res.status(401).json({ message: "Fill all fields" })
    }
    try {
        const preadmin = await admins.findOne({ phone: phone });

        if (preadmin) {
            return res.status(200).json("Admin already exist")
        }
        else {
            const newadmin = new admins({
                name,
                phone,
                email,
                password,
                birth,
                gender
            });
            const storeData = await newadmin.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
    }
};


exports.adminlogin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await admins.findOne({ email: email });

    try {
        if (admin) {
            const isPasswordValid = await bcrypt.compare(password, admin.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Incorrect Password" });
            }
            console.log("Admin Match");

            const login_token = jwt.sign(
                {
                    email: admin.email,
                    id: admin._id,
                },
                SECRET_KEY
            );
            res.status(200).json({ exists: true, admin: admin, token: login_token });
        } 
        else {
            return res.status(401).json({ message: "Admin not found" });
        }
    } catch (error) {
        console.error("Error during password comparison:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

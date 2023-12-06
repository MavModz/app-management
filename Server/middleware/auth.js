const jwt = require("jsonwebtoken");
const admins = require("../models/adminSchema");
const SECRET_KEY = process.env.key;

const loginAuth = async(req, res, next) => {
    try {
        const auth = req.headers.authorization;
        const token = auth?.split(" ")[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({message: 'user not authorized'});
        }

        const userId = decoded.id;
        console.log(userId);
        req.body.id = userId;
        console.log(req.body.id, "this is requested body");

        next();
    }
    catch(error) {
        res.status(500).json({error: "Internal server error", error})
    }
};

module.exports  = {loginAuth}
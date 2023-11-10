const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userController");
const adminControllers = require("../controllers/adminController")

//Routes
router.post("/user/register", controllers.userregister);
router.post("/admin/register", adminControllers.adminregister);
router.post("/admin/login", adminControllers.adminlogin);
module.exports = router;
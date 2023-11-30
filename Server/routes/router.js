const express = require("express");
const router = express.Router();
const usercontrollers = require("../controllers/userController");
const adminControllers = require("../controllers/adminController")

//Routes
router.post("/admin/register", adminControllers.adminregister);
router.post("/admin/login", adminControllers.adminlogin);

router.post("/user/register", usercontrollers.userregister);
router.post("/user/checkout", usercontrollers.checkout);
router.get("/user/total-courses", usercontrollers.enrolledcourses);
module.exports = router;
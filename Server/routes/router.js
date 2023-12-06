const express = require("express");
const router = express.Router();
const {loginAuth} = require("../middleware/auth");
const usercontrollers = require("../controllers/userController");
const adminControllers = require("../controllers/adminController");

//Routes
router.post("/admin/register", adminControllers.adminregister);
router.post("/admin/login", adminControllers.adminlogin);
router.get("/admin/total-enrollments", adminControllers.totalenrollments);

router.post("/user/register", usercontrollers.userregister);
router.post("/user/checkout", usercontrollers.checkout);
module.exports = router;
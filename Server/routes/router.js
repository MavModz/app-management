const express = require("express");
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const userAuth = require("../middleware/userAuth");
const usercontrollers = require("../controllers/userController");
const adminControllers = require("../controllers/adminController");

//Routes
router.post("/admin/register", adminControllers.adminregister);
router.post("/admin/login", adminControllers.adminlogin);
router.get("/admin/total-enrollments", adminControllers.totalenrollments);
router.post("/admin/add-course", adminAuth, adminControllers.addCourse);

router.post("/user/register", usercontrollers.userregister);
router.post("/user/checkout", userAuth, usercontrollers.checkout);
module.exports = router;
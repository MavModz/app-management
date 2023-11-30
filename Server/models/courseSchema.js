const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: String,
    courseCode: String
});

const courses = new mongoose.model("courses", courseSchema);
module.exports = courses;
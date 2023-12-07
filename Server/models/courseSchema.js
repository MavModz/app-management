const mongoose = require('mongoose');
const adminId = require('../models/adminSchema');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    courseCode: {
        type: String,
        required: true,
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'adminId',
        required: true
    }
});

const courses = new mongoose.model("courses", courseSchema);
module.exports = courses;
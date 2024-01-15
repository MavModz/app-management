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
        required: true,
    },
    teacherName: {
        type: String,
        required: true,
    },
    coursePrice: {
        type: String,
        required: true,
    },
    courseThumbnail: {
        type: Object,
        // required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    }
});

const courses = new mongoose.model("courses", courseSchema);
module.exports = courses;
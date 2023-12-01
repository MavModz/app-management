const mongoose = require("mongoose");
const courses = require("./courseSchema");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birth: {
        type: String,
        unique: true,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    enrolledCourses: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }],
        default: []
    },
});

const users = new mongoose.model("users",userSchema);

module.exports = users;
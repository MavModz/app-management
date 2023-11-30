const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    phone: {
        type: String,
        require: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    date: {
        type: String,
        default: getCurrentDate(),
    }
})

const checkouts = new mongoose.model("Checkouts", checkoutSchema);
module.exports = checkouts;

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
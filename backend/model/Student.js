const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    phoneNo: Number,
    currentLocation: String
})
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
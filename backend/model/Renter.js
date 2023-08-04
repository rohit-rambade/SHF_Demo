const mongoose = require('mongoose');

const renterSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    email: String,
    phoneNumber: Number,
    address: String

})

const Renter = mongoose.model('Renter', renterSchema);

module.exports = Renter;
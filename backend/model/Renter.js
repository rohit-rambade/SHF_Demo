const mongoose = require('mongoose');
const Joi = require('joi');
const renterSchema = new mongoose.Schema({
    firstname: { type: String, required: true, minlength: 5, maxlength: 50 },
    lastname: { type: String, required: true, minlength: 5, maxlength: 50 },
    username: { type: String, required: true, minlength: 5, maxlength: 50, unique: true },
    email: { type: String, required: true, minlength: 5, maxlength: 50, unique: true },
    password: { type: String, required: true, minlength: 5, maxlength: 1024 },
    phoneNo: { type: Number, required: true },
    address: { type: String, required: true, minlength: 3, maxlength: 50 }

})

const Renter = mongoose.model('Renter', renterSchema);

const validateRenter = (user) => {
    const schema = {
        firstname: Joi.string().required().min(5).max(50),
        lastname: Joi.string().required().min(5).max(50),
        username: Joi.string().required().min(5).max(50),
        email: Joi.string().required().min(5).max(50).email(),
        password: Joi.string().required().min(5).max(1024),
        phoneNo: Joi.number().required().min(10),
        address: Joi.string().required().min(5).max(50),
    }
    return Joi.object(schema).validate(user);
}
exports.Renter = Renter;
exports.validate = validateRenter;
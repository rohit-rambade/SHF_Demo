const { Renter, validate } = require('../model/Renter');
const { renterSecret } = require('../middleware/Renter')
const jwt = require("jsonwebtoken");


exports.createRenter = async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const { username } = req.body;
    const renterExists = await Renter.findOne({ username });
    if (renterExists) {
        res.status(403).json({ message: "Renter already exists" });
    } else {
        const newRenter = new Renter(req.body)
        await newRenter.save();
        const token = jwt.sign({ username, role: 'renter' }, renterSecret)
        res.json({ message: "Renter created successfully", token });
    }
}

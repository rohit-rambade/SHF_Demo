const { Renter, validate } = require('../model/Renter');

exports.createRenter = async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const { username } = req.body;
    const renterExists = await Renter.findOne({ username });
    if (renterExists) {
        res.status(403).json({ message: "Renter already exists" });
    } else {
        const newRenter = await new Renter(req.body)
        newRenter.save();
        res.json({ message: "Renter created successfully" });
    }
}

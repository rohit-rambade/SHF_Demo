const jwt = require("jsonwebtoken");
require("dotenv").config();
const renterSecret = process.env.RENTER_SECRET;
const authenticateRenter = (req, res, next) => {
    console.log(process.env.RENTER_SECRET);
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, renterSecret, (err) => {
            if (err) {
                return res.sendStatus(403);
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    authenticateRenter,
    renterSecret
}
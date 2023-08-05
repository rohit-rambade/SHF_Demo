const jwt = require("jsonwebtoken");
require("dotenv").config();
const studentSecret = process.env.STUDENT_SECRET;
const authenticateStudent = (req, res, next) => {
    console.log(process.env.STUDENT_SECRET);
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, studentSecret, (err) => {
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
    authenticateStudent,
    studentSecret
}
const { studentSecret } = require('../middleware/Student');
const jwt = require("jsonwebtoken");
const { Student, validate } = require('../model/Student')
exports.createStudent = async (req, res) => {
    const { error } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const { username } = req.body;

    const studentExists = await Student.findOne({ username })
    console.log(studentExists);
    if (studentExists) {
        res.status(403).json({ message: "Student already exists" });
    } else {
        const newStudent = new Student(req.body)
        await newStudent.save();
        const token = jwt.sign({ username, role: "student" }, studentSecret);
        res.json({ message: "Student created successfully", token });
    }

}
exports.login = async (req, res) => {
    const { username, password } = req.headers;

    const user = await Student.findOne({ username });
    if (user) {
        const token = jwt.sign({ username, role: "student" }, studentSecret);
        res.json({ message: "Logged in successfully", token });
    } else {
        res.status(403).json({ message: "Student authentication failed" });
    }
};


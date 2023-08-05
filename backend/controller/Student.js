const { studentSecret } = require('../middleware/Student');
const jwt = require("jsonwebtoken");
const Student = require('../model/Student')
exports.createStudent = async (req, res) => {
    const { username } = req.body;
    const studentExists = await Student.findOne({ username })
    console.log(studentExists);
    if (studentExists) {
        res.status(403).json({ message: "Student already exists" });
    } else {
        const newStudent = new Student(req.body)
        await newStudent.save();
        const token = jwt.sign({ username, role: "student" }, studentSecret);
        res.json({ message: "User created successfully", token });
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


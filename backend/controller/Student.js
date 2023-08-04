const Student = require('../model/Student')

exports.createStudent = async (req, res) => {
    const { username } = req.body;
    const studentExists = await Student.findOne({ username })
    console.log(studentExists);
    if (studentExists) {
        res.status(403).json({ message: "Student already exists" });
    } else {
        const newStudent = await new Student(req.body)
        newStudent.save();
        res.json({ message: "User created successfully" });
    }

}



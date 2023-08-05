const express = require('express');
const router = express.Router();

const { createStudent, login } = require('../controller/Student');
const { authenticateStudent } = require('../middleware/Student');

router.post('/student/signup', createStudent)
router.post("/student/login", authenticateStudent, login);
module.exports = router
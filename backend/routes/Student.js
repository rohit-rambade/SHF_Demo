const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const { createStudent } = require('../controller/Student')

router.post('/student/signup', createStudent)

module.exports = router
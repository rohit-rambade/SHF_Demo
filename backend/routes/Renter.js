const express = require('express');
const router = express.Router();
const { createRenter } = require('../controller/Renter');


router.post('/renter/signup', createRenter)

module.exports = router
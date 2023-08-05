const express = require('express');

const mongoose = require('mongoose');
const PORT = 3001;

const app = express();
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/SHF');

const studentRoute = require('./routes/Student')
const renterRoute = require('./routes/Renter');
app.use(studentRoute);
app.use(renterRoute)



app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})

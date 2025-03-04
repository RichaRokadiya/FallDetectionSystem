const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
require('./db/mongoose');
// const User = require('./model/userSchema');

const app = express();
const port = process.env.PORT || 8001;

const userRouter = require('./routes/user.route');

app.use(cors());
app.use(express.json());
app.use(userRouter);


// mongoose.connect(process.env.MONGODB_URI).then(() => {
//     console.log('MongoDB Connected');
// }).catch((err) => console.log('No DB Connected'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
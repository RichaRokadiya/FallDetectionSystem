const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    chatId: {
        type: String
    }
})

const User = mongoose.model('USER', userSchema);

module.exports = User;
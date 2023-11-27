const express = require('express');
const router = express.Router();

require('../db/mongoose');
const User = require('../model/userSchema');

router.get('/', async (req, res) => {
    res.send('Hello from user router');
});

router.post('/token', async (req, res) => {
    const { token, chatId } = req.body;
    if(!token || !chatId) {
        res.status(422).json({ error: "Please enter the token id"});
    }


    try {
        const tokenExist = await User.findOne({ token: token });
        // if(tokenExist) {
        //     return res.status(422).json({ error: "Token already exists"});
        // }

        const user = new User({ token, chatId });
        await user.save();

        if (token) {
            res.status(201).json({ message: "Token entered successfully!", data: user });
        } else {
            res.status(500).json({ error: "Failed to add token!"});
        }
        
    } catch(err) {
        console.log(err);
    }
});


module.exports = router;
const express = require('express');
const router = express.Router();

require('../db/mongoose');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello from user router');
});

router.post('/token', (req, res) => {
    // console.log(req.body);

    // THIS
    // if (!req.body.token) {
    //     return res.status(422).json({ error: "Please enter the token id!" });
    // }

    // OR
    const { token } = req.body;     // to add multiple fields, ex { name, email, password } = req.body;
    if(!token) {                    // (!name || !email || !password) {}
        return res.status(422).json({ error: "Please enter the token id!" });
    }


    
    User.findOne({ token: token })
    .then((tokenExist) => {

        // NOT REQD
        // if(tokenExist) {
        //     return res.status(422).json({ error: "Token already exists"});
        // }

        const user = new User({ token });

        user.save().then(() => {
            res.status(201).json({ message: "Token entered successfully!"});
        }).catch((err) => {
            res.status(500).json({ error: "Failed to add token!"});
        })
    }).catch(err => { console.log(err); });
});

module.exports = router;
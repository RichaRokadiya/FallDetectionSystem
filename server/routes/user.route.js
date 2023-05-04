const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from user router');
});

router.post('/token', (req, res) => {
    console.log(req.body);
    res.json({message: req.body});
    // res.send('My token id page');
});

module.exports = router;
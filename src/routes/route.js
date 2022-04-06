const express = require('express');
const blogger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("my name is bhawna")
    console.log('the endpoint value is', blogger.url)
    console.log('calling log function')
    blogger.logging()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
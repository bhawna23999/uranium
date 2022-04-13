const express = require('express');
const router = express.Router();
const bookModel = require("../models/bookModel")
const bookController = require("../controllers/bookController")


router.get('/route1',function(req,res){
    res.send("my first api")
})

router.post('/createBook', bookController.createBook);

router.get('/bookList',bookController.getbookList)

router.get('/getBooksInYear',bookController.getBooksInYear);

router.get('/getXINRBooks',bookController.getXINRBook)

router.get('/getRandomBooks',bookController.getRandomBooks)

router.get('/getParticularBooks',bookController.getParticularBooks)

module.exports = router;


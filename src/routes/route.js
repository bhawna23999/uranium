const express = require('express');
const router = express.Router();
const bookModel = require("../models/bookModel")
const bookauthorController = require("../controllers/bookauthorController")


router.get('/route1',function(req,res){
    res.send("my first api")
})

router.post('/createBook', bookauthorController.createBook);
router.post('/createauthor',bookauthorController.createauthor)

router.get('/allBooks',bookauthorController.allBooks)

router.get('/upadatedbookPrice',bookauthorController.upadatedbookPrice)

router.get('/authorsName',bookauthorController.authorsName)

module.exports = router;


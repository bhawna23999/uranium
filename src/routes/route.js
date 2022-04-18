const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController");



router.get('/route1',function(req,res){
    res.send("my first api")
})

router.post('/createNewBook', bookController.createNewBook);

router.post('/createNewAuthor',authorController.createNewAuthor)


router.post('/createNewPublisher',publisherController.createNewPublisher)

router.get("/getAuthorsData",authorController.getAuthorData)

router.get('/getPublisherData',publisherController.getPublisherData)

router.get('/getBooksData', bookController.getBooksData)

router.get('/getBooksWithAuthorsAndWithPublisherDetails',bookController.getBooksWithAuthorsAndWithPublisherDetails)

router.put('/updateBooks',bookController.updateBooks)

router.put('/updatePrice',bookController.updatePrice)

module.exports = router;


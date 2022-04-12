const express = require('express');
const router = express.Router();
const studentModel = require("../models/studentModel")
const userController = require("../controllers/userController")


router.get('/route1',function(req,res){
    res.send("my first api")
})

router.post('/createStudents', userController.createUser);

router.get('/getAllStudents',userController.getUserData)

module.exports = router;


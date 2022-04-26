const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/states",CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin",CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)


router.get("/cowin/districtById", CowinController.getByDistrictId)

router.get("/getSortedCities",CowinController.getSortedCities)

router.get("/getMemes",CowinController.getMemes)

router.post("/createMeme", CowinController.createMemes)

module.exports = router;
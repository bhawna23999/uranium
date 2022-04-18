const express = require('express');
const router = express.Router();

const batchController = require("../controllers/batchController")
const developersController = require("../controllers/developersController")




router.get('/route1',function(req,res){
    res.send("my first api")
})

router.post('/createbatch', batchController.createbatch);

router.post('/createDeveloper',developersController.createDeveloper)



router.get('/getbatchData',batchController.getbatchData)

router.get('/getDeveloperData',developersController.getDeveloperData)

router.get('/getDevelopersWithBatchesDetails',developersController.getDevelopersWithBatchesDetails)

router.get('/scholarshipdevelopers',developersController.scholarshipdevelopers)

router.get('/developers',developersController.developers)


module.exports = router;


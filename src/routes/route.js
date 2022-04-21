const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
const middlewares = require("../middlewares/commonMiddlewares")


router.get('/test-me',function(req,res){
    res.send("my first api")
})


router.post('/createUsers',middlewares.middleWare, userController.createUsers)

router.get('/getUsers',userController.getUsers)


router.post('/createProduct',productController.createProduct)

router.get('/getProduct', productController.getProduct)


router.post('/createuserOrders',middlewares.middleWare,orderController.createuserOrders)

router.get('/getOrderData',orderController.getOrderData)

router.get('/getDatawithUserAndProductDetails', orderController.getDatawithUserAndProductDetails)



module.exports = router;


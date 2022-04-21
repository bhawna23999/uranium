const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")

const createuserOrders = async function(req,res)
{
    let orders = req.body
    let getPId = orders.productId
    let getUId = orders.userId
    if(!getPId && !getUId)
    {
        return res.send({Error:"Product Id and User is is required"})
    }
    if(!getPId)
    {
        return res.send({Error:"Produt Id is required"})
    }
    if(!getUId)
    {
        return res.send({Error:"User Id is required"})
    }
    const freeUser = req.headers.isFreeAppUser
    let userbalance = await userModel.findOne({_id: orders.userId}).select('balance')
    let productPrice = await productModel.findOne({_id: orders.productId}).select('price')
    if(!freeUser && userbalance.balance >= productPrice.price){
        let newBalance = userbalance.balance - productPrice.price
        let orderData = await orderModel.create({
            userId:orders.userId,
            productId: orders.productId,
            amount: productPrice.price,
            isFreeAppUser: false
        })
        await userModel.findOneAndUpdate({_id: orders.userId}, {balance: newBalance})
        res.send({msg: orderData})
    }
    else if(!freeUser && userbalance.balance < productPrice.price) 
    {
        return res.send({msg: "insufficient balance"})
    }    
    else
    {
        let orderData = await orderModel.create({
            userId: orders.userId,
            productId: orders.productId,
            amount: 0,
            isFreeAppUser: true
        })
        res.send({msg: orderData})
    }
}



const getOrderData = async function(req,res)
{
    let getOrder = await orderModel.find()
    res.send({data:getOrder})
}

const getDatawithUserAndProductDetails = async function(req,res)
{
    let getAllData = await orderModel.find().populate('userId productId')
    res.send({data:getAllData})
}
module.exports.createuserOrders = createuserOrders
module.exports.getOrderData = getOrderData
module.exports.getDatawithUserAndProductDetails = getDatawithUserAndProductDetails
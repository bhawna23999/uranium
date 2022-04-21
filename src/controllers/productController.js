const productModel = require("../models/productModel")
const { get } = require("../routes/route")


const createProduct = async function(req,res){
    let product = req.body
    let productData = await productModel.create(product)
    res.send({data:productData})
}

const getProduct = async function(req,res){
    let getProductData = await productModel.find()
    res.send({data:getProductData})
}

module.exports.createProduct = createProduct
module.exports.getProduct = getProduct
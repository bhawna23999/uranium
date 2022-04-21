const userModel = require("../models/userModel")


const createUsers = async function(req,res){
    
    let userData = req.body 
    let createduser = await userModel.create(userData)
    res.send({data:createduser})
}

const getUsers = async function(req,res){
    
    let getUserData = await userModel.find()
    res.send({data:getUserData})
}

module.exports.createUsers  = createUsers 
module.exports.getUsers = getUsers
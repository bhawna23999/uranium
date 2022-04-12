const studentModel = require("../models/studentModel")


const createUser = async function(req,res)
{
    var data = req.body
    console.log(data)
    let saveData = await studentModel.create(data)
    res.send({msg: saveData})
}

const getUserData = async function(req,res){
    let allUsers = await studentModel.find()
    res.send(allUsers)
}

module.exports.createUser = createUser
module.exports.getUserData = getUserData
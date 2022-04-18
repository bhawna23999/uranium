const { findById } = require("../models/batchModel")
const batchModel = require("../models/batchModel")
const developersModel = require("../models/developersModel")

const createDeveloper = async function(req, res){
  let developer = req.body

  let developerCreated = await developersModel.create(developer)
  res.send({data:developerCreated})
 
}

const getDeveloperData = async function(req,res){
    let developers = await developersModel.find()
    res.send({data:developers})
}

const getDevelopersWithBatchesDetails = async function (req,res){
    let specificDeveloper = await developersModel.find().populate('batch')
    res.send({data:specificDeveloper})
}

const scholarshipdevelopers = async function (req,res){
    let scholarship = await developersModel.find({$and: [{percentage:{$gte:70}},{gender:"female"}]})
    res.send({data:scholarship})
}

const developers = async function(req,res){

    
    let prog = req.query.program
    let findbatch = await batchModel.find({name:prog}) 

    // let arrayOfbatch = []
    // for(let i =0; i<findbatch.length; i++){

    //     let objId = findbatch[i]._id
    //     arrayOfbatch.push(objId)

    // }
    let percent = req.query.percentage
    // let fetchdevelopers = await developersModel.find({batch:arrayOfbatch,percentage:{$gte:percent}})
    // res.send({data:fetchdevelopers})

    let result = await developersModel.find({batch:findbatch, percentage:{$gte:percent}})
    res.send({data:result})
}
module.exports.createDeveloper = createDeveloper
module.exports.getDeveloperData = getDeveloperData
module.exports.getDevelopersWithBatchesDetails = getDevelopersWithBatchesDetails
module.exports.scholarshipdevelopers  = scholarshipdevelopers
module.exports.developers = developers






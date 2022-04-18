
const batchModel = require("../models/batchModel")

const createbatch = async function(req,res)
{
  let batch = req.body
  let batchData = await batchModel.create(batch)
  res.send({msg:batchData})
}

const getbatchData = async function (req,res){
  let batches = await batchModel.find()
  res.send({darta:batches})
}


module.exports.createbatch =  createbatch
module.exports.getbatchData = getbatchData



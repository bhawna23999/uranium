const publisherModel = require("../models/publisherModel")

const createNewPublisher = async function(req,res){
    let publisherData = req.body
    let publishData = await publisherModel.create(publisherData)

    res.send({data:publishData})
}

const getPublisherData = async function(req,res){
    let getPublishers = await publisherModel.find()
    res.send({data:getPublishers})
}

module.exports.createNewPublisher = createNewPublisher
module.exports.getPublisherData = getPublisherData
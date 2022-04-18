
const authorModel = require("../models/authorModel")

const createNewAuthor = async function(req,res)
{
  let author = req.body
  let authorData = await authorModel.create(author)
  res.send({msg:authorData})
}

const getAuthorData = async function (req,res){
  let authors = await authorModel.find()
  res.send({darta:authors})
}


module.exports.createNewAuthor =  createNewAuthor
module.exports.getAuthorData = getAuthorData



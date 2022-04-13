const bookModel = require("../models/bookModel")


const createBook = async function(req,res){
  let data = req.body
  let savedData = await bookModel.create(data)
  res.send({msg:savedData})

}

const getbookList = async function(req,res)
{

  let authorsandbooks = await bookModel.find().select({bookName:1, authorName:1, _id:0})

  res.send(authorsandbooks)

}

const getBooksInYear = async function(req,res)
{
  let takeYear = req.body.year
  let BooksnYear = await bookModel.find({year:takeYear})
  res.send({msg:BooksnYear})
}

const getXINRBook = async function(req,res)
{
  let priceTag = await bookModel.find({$or : [{'prices.indianPrice' : {$eq: "100INR"}}, {'prices.indianPrice' : {$eq: "200INR"}},{'prices.indianPrice' : {$eq: "500INR"}}]})

  res.send({msg:priceTag})
}
const getRandomBooks = async function(req,res)
{
  let returnbooks = await bookModel.find({$or: [{stockAvailable : true}, {totalPages:{$gt:500}}]})

  res.send(returnbooks)
}

const getParticularBooks = async function(req,res)
{
  let condition = req.body
  let particularBooks = await bookModel.find(condition)

  res.send(particularBooks)
}



module.exports.createBook = createBook
module.exports.getbookList = getbookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getXINRBook = getXINRBook
module.exports.getRandomBooks = getRandomBooks
module.exports.getParticularBooks = getParticularBooks

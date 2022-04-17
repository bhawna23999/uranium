const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")


const createBook = async function(req,res)
{
  let book = req.body
  let booksData = await bookModel.create(book)
  res.send({msg:booksData})
}

const createauthor = async function(req,res)
{
  let author = req.body
  let authorData = await authorModel.create(author)
  res.send({msg:authorData})
}

const allBooks = async function(req,res)
{
  const authorDetails = await authorModel.find({author_name:"Chetan Bhagat"})

  const id = authorDetails[0].author_id

  const booksName = await bookModel.find({author_id : id}).select({name:1,_id:0})

  res.send({msg:booksName})

}

const upadatedbookPrice = async function (req, res) 
{ 

  const bookDetails = await bookModel.find({name: "Two states"})
  const id = bookDetails[0].author_id

  const authorN = await authorModel.find({author_id: id}).select({author_name: 1,_id: 0})

  const bkName = bookDetails[0].name
  const updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {$set:{price:"100"}},{new:true}).select({price:1, _id:0})

  res.send({msg: authorN,updatedPrice})

}

const authorsName = async function (req,res) 
{

  const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1,_id:0})

  const id = booksId.map(inp => inp.author_id)

  let temp =[]

  for(let i=0; i<id.length; i++) 
  {

    let x = id[i]
    const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
    temp.push(author)

  }

  const authorName = temp.flat()
  res.send({msg:id})
}
module.exports.createBook = createBook
module.exports.createauthor =  createauthor
module.exports.allBooks= allBooks
module.exports.upadatedbookPrice = upadatedbookPrice
module.exports.authorsName = authorsName


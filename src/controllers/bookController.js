const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")


const createNewBook = async function(req, res){
  let book = req.body
  let authorId = book.author
  let publisherId = book.publisher
  if(!authorId){
      return res.send({msg:"author detail is required"})
  }

  let author = await authorModel.findById(authorId)

  if(!author){
      return res.send({msg:"not a valid author Id"})
  }

  if(!publisherId){
      return res.send({msg:"publisherId is required"})
  }

  let publisher = await publisherModel.findById(publisherId)

  if(!publisher){
      return res.send({msg:"not a valid publisher Id"})
  }
  let bookCreated = await bookModel.create(book)
  res.send({data:bookCreated})


 
}

const getBooksData = async function(req,res){
    let books = await bookModel.find()
    res.send({data:books})
}

const getBooksWithAuthorsAndWithPublisherDetails = async function (req,res){
    let specificBook = await bookModel.find().populate('author publisher')
    res.send({data:specificBook})
}

const updateBooks = async function(req,res){
    
    let hardCOverPublishers = await publisherModel.find({name : {$in:['Penguin',' HarperCollins'] }}).select({_id:1})
    let arrayOfPublisher = []
    for(let i =0; i<hardCOverPublishers .length; i++)
    {
        let objId = hardCOverPublishers[i]._id
        arrayOfPublisher.push(objId)
    }

    let boooks = await bookModel.updateMany({publisher:{$in:arrayOfPublisher}},{isHardCover:true})
    res.send({data:boooks})

    // let boook = await bookModel.updateMany({publisher:hardCOverPublishers},{isHardCover:true})
    // res.send({data:boook})
}

const updatePrice = async function(req,res){

    let greater = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})

    let arrayOfAuthors = []


    for(let i=0; i<greater.length; i++){
       let AuthId = greater[i]._id
       arrayOfAuthors.push(AuthId)
    }

    const authors = await bookModel.updateMany({author:{$in:arrayOfAuthors}}, {$inc:{price:10}})
    res.send({data:authors})

    // const authorss = await bookModel.updateMany({author:greater},{$inc:{price:10}})

    // res.send({msg:authorss})



}






module.exports.createNewBook = createNewBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorsAndWithPublisherDetails = getBooksWithAuthorsAndWithPublisherDetails
module.exports.updateBooks = updateBooks
module.exports.updatePrice=  updatePrice




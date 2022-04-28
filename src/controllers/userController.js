const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try
  {
    let data = req.body;
    console.log(data)
    if(Object.keys(data).length != 0)
    {
      let savedData = await userModel.create(data);
      res.status(201).send({msg:savedData})
    }
    else
    {
      res.status(400).send({msg:"Bad Req"})
    }

  }
  catch(err)
  {
    console.log("this is error:",err.message)
    res.status(500).send({msg:"Error", error: err.message})
  }
};

const loginUser = async function (req, res) {
  try
  {  
    let userName = req.body.emailId;
    let password = req.body.password;
    if(userName && password)
    {
      let user = await userModel.findOne({ emailId: userName, password: password });
   
      if(!user)
      return res.status(404).send({  status: false,msg: "username or the password is not corerct"})
   
      let token = jwt.sign(  {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium");
  
      res.setHeader("x-auth-token", token);
      res.status(201).send({ status: true, data: token });

    }
    else
    res.status(400).send({msg:"Bad Req"})
  }   
  catch(err)
  {
    console.log("This is the error : ", err.message)
    res.status(500).send({msg:"Error",error:err.message})
  }
}
    
const getUserData = async function (req, res) {
  try
  {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });
    else
    res.status(200).send({ status: true, data: userDetails });
  }
  catch(err)
  {
    res.status(500).send({msg:"Error", error:err.message})
  } 
};

const updateUser = async function (req, res) { 
  try
  {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user)  
    return res.status(404).send("No such user exists")
    else
    {
      let userData = req.body;
      if(Object.keys(userData)!= 0)
      {
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
        res.status(200).send({ status:true,data: updatedUser });
      }
      else
      res.status(400).send({msg:"Bad Req"})
     
    }
  }
  catch(err)
  {
    res.status(500).send({msg:"Error",error:err.message})
  } 
};

const deleteUser = async function (req,res)
{
  try
  {
    let userId = req.params.userId
    let user = await userModel.findById(userId)
    if(!user)
    return res.status(404).send({status:false, msg:"no such user exists"})
  
    let deletedUser = await userModel.findOneAndUpdate({_id:userId},{age : 30,new:true})
    res.status(200).send({status:true, data:deletedUser})
  }
  catch(err)
  {
    res.status(500).send({msg:"Error",error:err.message})
  }

}

const postMessage = async function(req,res)
{
  try
  {
    let message = req.body.message
    if(message)
    {

    let user = await userModel.findById(req.params.userId)
    if(!user)
    return res.status(404).send({status:false, msg:"no user exists"})
  
    let updatedPosts = user.post
    updatedPosts.push(message)
    console.log(updatedPosts)
  
    let updateUser = await userModel.findOneAndUpdate({_id:user._id},{post:updatedPosts,new:true})
    res.status(200).send({status:true, data:updateUser})
    }
  }
  catch
  {
    res.status(500).send({msg:"Error",})

  } 
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
module.exports.postMessage = postMessage

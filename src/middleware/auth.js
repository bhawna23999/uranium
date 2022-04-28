const jwt = require("jsonwebtoken")

const MW = async function(req,res,next)
{
    try
    {
        let token = req.headers['x-auth-token']
        if(!token)
        token = req.headers['x-Auth-token']
        if(!token)
        return res.status(401).send({status:false,msg:"token must be present"})
        console.log(token)

        let decodedToken = jwt.verify(token, "functionup-thorium")
        if(!decodedToken)    
        return res.status(403).send({status:false,msg:'token is invalid'})
        console.log(decodedToken)

        let modified = req.params.userId
        let login = decodedToken.userId
 
        if(modified!= login)   
        return res.status(403).send({status:false,msg:"wrong user"})

        next() 

    }
    catch(err)
    {
        res.status(500).send({msg:"Error",error:err.message})
    }
    
}    

module.exports.MW = MW
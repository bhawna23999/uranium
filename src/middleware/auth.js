const jwt = require("jsonwebtoken")

const MW = async function(req,res,next)
{
    let token = req.headers['x-auth-token']
    if(!token)
    token = req.headers['x-Auth-token']

    if(!token)
    return res.send({statys:false,msg:"token must be present"})

    console.log(token)

    let decodedToken = jwt.verify(token, "functionup-thorium")
    
    // let loginId = req.params.userId
    // let modifiedId = decodedToken.userId

    if(!decodedToken)
    {
        return res.send({status:false,msg:'token is invalid'})
    }

    console.log(decodedToken)

    next() 
}    

module.exports.MW = MW
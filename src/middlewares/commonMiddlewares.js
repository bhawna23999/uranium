

const middleWare = async function(req,res,next) 
{
   let headerVal= req.headers.isfreeappuser
    console.log(headerVal)
    
    if(headerVal)
    {
        console.log(req.body.isFreeAppUser)
        if(headerVal === 'true') 
        req.body.isFreeAppUser = true
               
        if(headerVal === 'false')        
        req.body.isFreeAppUser = false       
        
        next()
                      
    }
    else
    {
        res.send({Error:"request is missing a mandatory header"})

    }
}

module.exports.middleWare = middleWare


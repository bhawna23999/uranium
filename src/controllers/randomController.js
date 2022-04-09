let fun = function(req,res)
{
    let x = req.body.number
    console.log(x)
    let arr = [1,2,3,4,5]
    arr.push(x)
    res.send({msg:"hi this is my third post api", data : arr})
}

module.exports.myfun = fun;
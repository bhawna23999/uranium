const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/all-candidates', function (req, res) {
    // console.log('------------------')
    // console.log(req)
    // console.log('------------------')
    // console.log('These are the request query parameters: ', req.query)

    let a = ["bhawna","ankita","hemant","gagan","parul","cp","omansh","deeksha","dinesh","sheela"]


    res.send(a)
});

router.get('/candidates',function(req,res)
{

    
    
    let arr = ["bhawna","ankita","hemant","gagan","parul","cp","omansh","deeksha","dinesh","sheela"]
    const arrNew = [];
    for (let index = 0; index < req.query.count; index++) 
    {
        arrNew.push(arr[index]);          
    }
    
   
    res.send(arrNew);


});




module.exports = router;
// adding this comment for no reason
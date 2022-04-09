const express = require('express');
const { route } = require('express/lib/application');
// const res = require('express/lib/response');
const newfile = require('../controllers/randomController')


const router = express.Router();

router.get('/movies',function(req,res)
{
    let arr = ["good will hunting","lean on me","the paper chase","forrest gump","theory of everyhting"]

    res.send(arr)
});

router.get('/movies/:indexNumber', function(req,res)
{
    let a;
    let arr = ["good will hunting","lean on me","the paper chase","forrest gump","theory of everyhting"]
    // for(let i=0; i<arr.length; i++)
    // {
    //     if(req.params.indexNumber == i)
    //     {
    //         a = arr[i]

    //     }
    // }
    // if(req.params.indexNumber>arr.length)
    // {
    //     a = " use a valid index."
    // }
    // res.send(a)
    if(req.params.indexNumber>=arr.length)
    {
        res.send('ERROR: Use a valid index')
    }
    res.send(arr[req.params.indexNumber])


});

router.get('/films',function(req,res)
{
    let arr = [ 
        {       
        "id": 1,
        "name": "The Shining"
        }, 
        {
        "id": 2,
        "name": "Incendies"
        },
        {
        "id": 3,
        "name": "Rang de Basanti"
        }, 
        {
        "id": 4,
        "name": "Finding Nemo"
        }] 
        res.send(arr)      
});

router.get('/films/:filmId',function(req,res)
{
    let arr = [ 
        {       
        "id": 1,
        "name": "The Shining"
        }, 
        {
        "id": 2,
        "name": "Incendies"
        },
        {
        "id": 3,
        "name": "Rang de Basanti"
        }, 
        {
        "id": 4,
        "name": "Finding Nemo"
        }] 

        // if(req.params.filmId>= arr.length)
        // {
        //     res.send("no movie")
        // }
        // res.send(arr[req.params.filmId])

        let a;
        for(i=0; i<arr.length; i++)
        {
            console.log(arr[i].id)
            if(req.params.filmId == arr[i].id)
            {
                a = arr[i]
                
            }           
            
        }
        if(req.params.filmId>=arr.length)
        {
            a =  "No movie exists with this id"
        }
        res.send(a)

})

router.get('/test-me',function(req,res)
{
    let arr = [33,34,35,37,38,39]
    
    let sum = 0;
    for(let index=0; index<arr.length; index++)
    {
        const element = arr[index]
        sum += element   
    }
    // console.log(sum)   
    let totalsum = (arr.length+1)* (arr[0]+arr[arr.length-1])/2   
    // console.log(totalsum)
    let missingNum = totalsum - sum
    
    // console.log(missingNum) 
    res.send([missingNum])
});

router.get('/test-api1',function(req,res)
{
    res.send({data : [1,2,3,4,5]})

})

router.post('/test-post1',function(req,res){
    res.send({msg:"hi guys"})

})

router.post('/test-post2',function(req,res)
{
    let data = req.body
    console.log(data)
    res.send({msg : "hi guys my second req"})
})

router.post('/test-post3',newfile.myfun)
module.exports = router;
// adding this comment for no reason
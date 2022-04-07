const express = require('express');
const { route } = require('express/lib/application');
const logger = require('./logger')

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
    for(let i=0; i<arr.length; i++)
    {
        if(req.params.indexNumber == i)
        {
            a = arr[i]

        }
    }
    if(req.params.indexNumber>arr.length)
    {
        a = " use a valid index."
    }
    res.send(a)

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

        let a;
        for(i=0; i<arr.length; i++)
        {
            // console.log(arr[i].id)
            if(req.params.filmId == arr[i].id)
            {
                a = arr[i]
                
            }
            
        }
        if(req.params.filmId>arr.length)
        {
            a =  "No movie exists with this id"
        }
        res.send(a)

})

module.exports = router;
// adding this comment for no reason
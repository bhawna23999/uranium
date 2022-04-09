const express = require('express');
const { route } = require('express/lib/application');
// const res = require('express/lib/response');



const router = express.Router();

let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
    },
]

router.post('/players',function(req,res)
{
    let x = req.body.name
    let otherplayer = req.body
    console.log(x)
    console.log(otherplayer)
    let flag = 0;
    for (let index = 0; index < players.length; index++) {
        const element = players[index];
        let {name} = element
        if(x=== name)
        {
            flag = 2
            break
        }       
    }
    if(flag === 0)
    {
        players = [...players,otherplayer]
    }
                    //  ANOTHER METHOD

    // let x = {}
    // x =  req.body
    // console.log(x)
    // function object(players)
    // {
    //     // console.log(players)
    //     for(let index=0; index<players.length; index++)
    //     {
    //         let element = players[index]
    //         if(element.name == x.name)
    //         {
    //             return 
    //         }
    //     }
    //     return players.push(x)
    // }
    // console.log(object(players))
    res.send({data: players, status : true})

});


module.exports = router;
// adding this comment for no reason
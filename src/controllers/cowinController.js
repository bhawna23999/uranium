let axios = require("axios");
const { get } = require("express/lib/request");

let getStates =  async function (req,res){
    try {
        let options = {
            method: 'get',
            url : 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        console.log(data)
        res.status(200).send({msg:data,status:true})

    }
    catch(err)
    {
        console.log(err)
        res.status(200).send({msg:data, status: true})
    }
 
}

let getDistricts = async function (req,res)
{
    try{
        let id = req.params.stateId
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options)
        // console.log(result)
        let data = result.data
        console.log(data)
        res.status(200).send({msg:data,status:true})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({msg:err.message})
    }
 
}

let getByPin = async function(req,res)
{
    try
    {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are : ${pin} ${date}`)
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        // console.log(result.data)
        let data = result.data
        res.status(200).send({msg:data})
    }
    catch(err)
    {
        console.log(err)
        res.send(500).send({msg:err.message})
    } 
}

let getOtp = async function(req,res)
{
    try
    {
        let mob= req.body
        console.log(`body is:${mob}`)
        let options = {
            method : "post",
            url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data : mob
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({msg:result.data})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({msg:err.message})
    } 
}

const getByDistrictId = async function(req,res)
{
    try
    {
        let id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${id} ${date}`)
        let options = {
            method  : "get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({msg:data})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({msg:err.message})
    }    
}

const getSortedCities = async function(req,res)
{
    try
    {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArray = []
        for(let i=0; i<cities.length; i++)
        {
            let obj = {city: cities[i]}

            let options = {
                method : "get",
                url : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=ad93a5db69ff751f13d344e3950fbd0f`
            }
            let resp = await axios(options)
            console.log(resp.data.main.temp)
        
            obj.temp = resp.data.main.temp
            cityArray.push(obj)         
        } 
        console.log(cityArray)
        let sorted = cityArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({data:sorted})             
    }
    catch(err)
    {
        console.log(err.message)
        res.status(500).send({msg:err.message})
    }   
}


let getMemes = async function(req, res){
    try{
        let options = {
            method : "get",
            url : "https://api.imgflip.com/get_memes"
        }
        let resp = await axios(options)
        let data = resp.data
        res.status(200).send({msg:data})
    }catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }  
}
const createMemes = async function(req,res)
{
    try{
        let memeId = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let pass = req.query.password
        let options = {
            methiod: 'post',
            url : `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${pass}`,
        }
        let resp = await axios(options)
        let data = resp.data
        res.status(200).send({msg:data})
    }catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }       
}

module.exports = {getStates, getDistricts, getByPin,getOtp, getByDistrictId, getSortedCities, getMemes, createMemes}




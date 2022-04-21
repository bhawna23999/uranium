const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    "mongodb+srv://Bhawna_Agrawal:bhawnaagrawal@cluster0.zk2kv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
)
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err));

// const assignmentMW = function(req,res,next)
// {
//     var currentdate = new Date()
//     var datetime = currentdate.getDate() + " " + (currentdate.getMonth() + 1) + " " + currentdate.getFullYear() + " " + currentdate.getHours() +  ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() 

//     let ip = req.ip
//     let route = req.path

//     // console.log(datetime,ip,route)
//     console.log(`${datetime} ${ip} ${route}`)
        // next()
// }

// app.use(assignmentMW)

// app.use(function(req,res,next){
//     console.log('This is a global middleware')
//     req['current-day'] = 'Wednesday'
//     next()
// })

app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});

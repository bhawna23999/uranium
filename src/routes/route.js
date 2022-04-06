const express = require('express');
const problem1 = require('../logger/logger')
const problem2 = require('../util/helper') 
const problem3 = require('../validator/fotmatter')
const _ = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('calling problem1 Welcome function')
    problem1.wel()
    console.log("calling problem2 current date function")
    problem2.currdate()
    console.log("calling problem2 current month function")
    problem2.currmonth()
    console.log("calling problem2 current batch function")
    problem2.currbatch()
    console.log("calling problem3 remove white space trim function")
    problem3.removespace()
    console.log("calling problem3 convert into lower case function")
    problem3.smallLetter()
    console.log("calling problem3 convert into upper case function")
    problem3.upperLetter()
    res.send('My first api ever!')
});

router.get('/hello', function (req,res)
{
    console.log(_.chunk(["jan", "feb", "march", "april", "may", "june", "july","aug","sep","oct","nov","dec"],3));
    console.log(_.tail([1,3,5,7,9,11,13,15,17,19]))
    console.log(_.union([1],[1,2],[2,3,4],[3,4,5],[4,5,6]))
    console.log(_.fromPairs( [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))
    res.send('my first lodash api')

} ); 

module.exports = router;
// adding this comment for no reason
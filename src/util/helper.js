const printDate = function()
{
 
    const date = new Date();
    const n = date.toDateString()
    console.log('Date : ' + n)

}

const printMonth = function()
{
    const nameOfMonth = new Date().toLocaleString(
        'default', {month: 'long'}
    );
    console.log('Month : ' + nameOfMonth);

}

const getBatchInfo = function()
{
    console.log("Uranium, W3D2, the topic for today is Nodejs module system and intro of nodejs, npm")
}

module.exports.currdate = printDate
module.exports.currmonth = printMonth
module.exports.currbatch = getBatchInfo
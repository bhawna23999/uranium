const trim = function()
{
    let text = "       function up        ";
    let result = text.trim();
    console.log(result)

}

const changetoLowerCase = function()
{
    let str = "FunctionUp"
    let result = str.toLowerCase()
    console.log(result)

}

const hangeToUpperCase = function()
{
    let str = "FunctionUp"
    let result = str.toUpperCase()
    console.log(result)
} 

module.exports.removespace = trim
module.exports.smallLetter = changetoLowerCase
module.exports.upperLetter = hangeToUpperCase
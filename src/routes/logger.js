let endpoint = 'https://www.google.com'

let log = function()
{
    console.log('I am inside log function') 
}

module.exports.url = endpoint
module.exports.logging = log
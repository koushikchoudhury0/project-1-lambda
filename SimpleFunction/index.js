var aws = require("aws-sdk")

exports.handler = async(e) => {

    /*Request Parsing & Response Staging*/
    /* let reqB = JSON.parse(e.body) */
    let response = { statusCode: 200, headers: { "Content-Type":"application/json", 'Access-Control-Allow-Origin': '*' } }
    let resB = { statusCode: 0 }
    
    resB.statusCode = 200    
    response.body = JSON.stringify(resB)
    return response
}

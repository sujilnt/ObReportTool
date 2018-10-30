const {generateToken}= require("../utils/generateToken");
const request = require("request");
const fetchRequest= (_url)=>{
  const options={
    url : _url,
    headers: {
      'x-dexcell-token': "5e0f3c56b4308a1cf248", // generateToken.token,//"5e0f3c56b4308a1cf248", //generateToken.token, //"5e0f3c56b4308a1cf248",//,//, // morrissons //"bd43541eeff752d5125a",
      "Accept": "application/json",
      'Accept-Charset': 'utf-8',
      'Content-Type': 'application/json'
    }
  };
  const requestPromise = new Promise((resolve,reject)=>{
    request(options, async function(error, response, body) {
      if(error){
        return error;
      }
      responseObj=response;
      const data =await responseObj.toJSON({
        'error':error,
        'statusCode': response && response.statusCode,
        'body': body
      });
      ((response.statusCode === 200) && (data.body!== undefined))  ? resolve(data) : reject(data);
    });
  });
  return requestPromise;
};
module.exports.fetchRequest=fetchRequest;

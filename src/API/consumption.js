const request = require("request");
const {generateToken}= require("../utils/generateToken");
//const {convertDate} = require("../utils/utils");
const consumption = (fromDate,toDate,deviceID,params="D",paramkey="GASENERGY")=>{
  const _url= `http://api.dexcell.com/v3/readings?from=${fromDate}&to=${toDate}&device_id=${deviceID}&parameter_key=${paramkey}&resolution=${params}&operation=DELTA`;
  console.log(_url);
  //const params={fromDate,toDate};
  const options={
    url : _url,
    headers: {
      'x-dexcell-token':generateToken.token, // morrissons
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
module.exports.consumption=consumption;

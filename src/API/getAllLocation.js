//const {parsingObj} = require("./parsingObjects.js");
const request = require("request");
const getAllLocation = ()=>{
// url format
  const _url= `https://api.dexcell.com/v3/locations/?limit=500`;
//const params={fromDate,toDate};
  const options={
    url : _url,
    headers: {
      'x-dexcell-token' :"c0fd279531e5ab806330", // morrissons
      'Accept-Charset': 'utf-8',
      "Accept": "application/json"
    }
  };
  const requestPromise = new Promise((resolve,reject)=>{
        request(options, async function(error, response, body) {
             const data =await JSON.parse(JSON.stringify(body));
      data === undefined ? reject(data): resolve(data);
    });
  });
  return requestPromise;

};
module.exports.getAllLocation=getAllLocation;

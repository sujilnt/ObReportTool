//const {parsingObj} = require("./parsingObjects.js");
const request = require("request");
const getAllLocation = ()=>{
  const {convertDate} = require("../utils/utils.js");
// convert date into ISO Format
  const fromDate = convertDate("2018-10-07");
  const toDate = convertDate("2018-10-14");

// url format
  const _url= `https://api.dexcell.com/v3/locations/?limit=5`;
//const params={fromDate,toDate};
  const options={
    url : _url,
    headers: {
      'x-dexcell-token' :"c0fd279531e5ab806330", // morrissons
      "Accept": "application/json"
    }
  };
  const requestPromise = new Promise((resolve,reject)=>{
    request(options, async function(error, response, body) {
      const data =await JSON.parse(body);
      data === undefined ? reject(data): resolve(data);
    });
  });
  return requestPromise;

};
module.exports.getAllLocation=getAllLocation;

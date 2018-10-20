const request = require("request");
const consumption = (fromDate,toDate,deviceID,params="D")=>{
  const _url= `http://api.dexcell.com/v3/readings?from=${fromDate}&to=${toDate}&device_id=${deviceID}&parameter_key=EACTIVE&resolution=${params}&operation=DELTA`;
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
      if(error) {
        return error;
      }
      const data = JSON.parse(body);
      data === undefined ? reject(data): resolve(data);
    });
  });
  return requestPromise;
};
module.exports.consumption=consumption;

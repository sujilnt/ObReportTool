//const {parsingObj} = require("./parsingObjects.js");
const {fetchRequest}=require("./fetchRequest");
const getAllLocation = async ()=>{
  const _url= `https://api.dexcell.com/v3/locations/?limit=500`;
  return await fetchRequest(_url).then((data)=>{
   console.log("getAllLocation ",JSON.parse(data.body),JSON.parse(data.body).length);
   return data;
  });
};
module.exports.getAllLocation=getAllLocation;

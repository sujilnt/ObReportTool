//const {parsingObj} = require("./parsingObjects.js");
const {fetchRequest}=require("./fetchRequest");
const getAllLocation = async ()=>{
  const _url= `https://api.dexcell.com/v3/locations/?limit=500`;
  return await fetchRequest(_url).then((data)=>{
   return data;
  });
};
module.exports.getAllLocation=getAllLocation;

//const {parsingObj} = require("./parsingObjects.js");
const {fetchRequest}=require("./fetchRequest");
const getAllLocation = async (params)=>{
  const _url= `https://api.dexcell.com/v3/locations/?limit=${params.limit}&start=${params.start}`;
  return await fetchRequest(_url).then((data)=>{
   return data;
  }).catch((error)=>error);
};
module.exports.getAllLocation=getAllLocation;

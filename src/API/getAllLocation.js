//const {parsingObj} = require("./parsingObjects.js");
const {fetchRequest}=require("./fetchRequest");
const getAllLocation = async ()=>{
  const _url= `https://api.dexcell.com/v3/locations/?limit=5`;
  return await fetchRequest(_url).then((data)=>{
   console.log(data);
   return data;
  });
};
module.exports.getAllLocation=getAllLocation;

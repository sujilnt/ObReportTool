const {getAllLocation} = require("./getAllLocation");
const {getAllOptimisedSite} = require("./getAllOptimisedSite");
const {addOptimisedDate}=require("../utils/addOptimisedDate");
const getAlloptimisedDevices =async ()=>{
  const siteNames= await getAllOptimisedSite();
  const devicesNames= await getAllLocation().then((response)=>{
       return JSON.parse(response);
  });
   addOptimisedDate(siteNames, devicesNames);
  return devicesNames;
};
module.exports.getAlloptimisedDevices= getAlloptimisedDevices;

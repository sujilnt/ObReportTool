"use strict";
const {getAllLocation} = require("./getAllLocation");
const {getAllOptimisedSite} = require("./getAllOptimisedSite");
const {addOptimisedDate}=require("../utils/addOptimisedDate");
const getAlloptimisedDevices =async ()=>{
  const siteNames= await getAllOptimisedSite(); // response Object
  const devicesNames= await getAllLocation(); // response Object
   addOptimisedDate(siteNames, JSON.parse(devicesNames.body));
  return devicesNames;
};
module.exports.getAlloptimisedDevices= getAlloptimisedDevices;

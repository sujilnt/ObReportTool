"use strict";
const  getAlllocations =require("../Data/getAlllocations.json");
const {getConsumptionData}=require("./getConsumptionData");
const returnDataPromise=(data)=>data;
const currentYearElectricityConsumption=async(date)=>{
  return await getConsumptionData(date.trim(),"MAINSUPPLY",getAlllocations,false,"D","EACTIVE").then(returnDataPromise);
};

const previousYearElectricityConsumption =async (date)=>{
  return await getConsumptionData(date.trim(),"MAINSUPPLY",getAlllocations,true,"D","EACTIVE").then(returnDataPromise);
};

module.exports={
  currentYearElectricityConsumption: currentYearElectricityConsumption,
  previousYearElectricityConsumption: previousYearElectricityConsumption
};

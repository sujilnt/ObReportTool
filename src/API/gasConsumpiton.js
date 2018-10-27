"use strict";
const {getConsumptionData}=require("./getConsumptionData");
const gasData =require("../Data/gasData");
const returnDataPromise=(data)=>data;
const currentYearGasConsumption=async(date)=>{
  return await getConsumptionData(date,"GAS",gasData,false).then(returnDataPromise);
};

const previousYearGasConsumption =async (date)=>{
 return await getConsumptionData(date.trim(),"GAS",gasData,true).then(returnDataPromise);
};

module.exports={
  currentYearGasConsumption: currentYearGasConsumption,
  previousYearGasConsumption: previousYearGasConsumption
};


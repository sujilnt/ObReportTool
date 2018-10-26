"use strict";
const {getConsumptionData}=require("./getConsumptionData");
const gasData =require("../Data/gasData");
const currentYearGasConsumption=async(date)=>{
  console.log("dateeee",date);
  getConsumptionData(date,"GAS",gasData,false).then((currentYearData)=>{
    return currentYearData;
  });
};

const previousYearGasConsumption =async (date)=>{
  console.log("dateeee",date);
   await getConsumptionData(date,"GAS",gasData,true).then((previousYearData)=>{
    return previousYearData;
  });
};
module.exports={
  currentYearGasConsumption:currentYearGasConsumption,
  previousYearGasConsumption: previousYearGasConsumption
};

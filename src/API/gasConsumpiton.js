"use strict";
const {getConsumptionData}=require("./getConsumptionData");

const returnDataPromise=async(listofPromises)=>{
  return await Promise.all(listofPromises).then((data)=>data.filter((row)=> row !== undefined))
};
const currentYearGasConsumption=async(date)=>{
  const  gasData = JSON.parse(window.localStorage.getAllLocation);
  return await getConsumptionData(date,"GAS",gasData,"thisYear");
};

const previousYearGasConsumption =async (date)=>{
  const  gasData = JSON.parse(window.localStorage.getAllLocation);
  return await getConsumptionData(date,"GAS",gasData,"lastYear");
};
const gasConsumption = async(date)=>{
  const currentYearValue = await currentYearGasConsumption(date).then(returnDataPromise);
  const previousYearValue = await previousYearGasConsumption(date).then(returnDataPromise);
  return {currentYear: currentYearValue,previousYear: previousYearValue};
};
module.exports={
  gasConsumption:gasConsumption
};


"use strict";
const  getAlllocations =require("../Data/getAlllocations.json");
const {getConsumptionData}=require("./getConsumptionData");

const returnDataPromise=async(listofPromises)=>{
  return await Promise.all(listofPromises).then((data)=>data.filter((row)=> row !== undefined))
  };
const currentYearElectricityConsumption=async(date)=>{
  return await getConsumptionData(date,"MAINSUPPLY",getAlllocations,"thisYear","D","EACTIVE");
};

const previousYearElectricityConsumption =async (date)=>{
  return await getConsumptionData(date,"MAINSUPPLY",getAlllocations,"lastYear","D","EACTIVE");
};
const electricityConsumption = async(date)=>{
  const currentYearValue = await currentYearElectricityConsumption(date).then(returnDataPromise);
  const previousYearValue = await previousYearElectricityConsumption(date).then(returnDataPromise);
  //const writethisYear = createJson("thisYear",currentYearValue);
 // const previousYear = createJson("previousYear",previousYearValue);
  return {currentYear: currentYearValue,previousYear: previousYearValue};
};
module.exports={
  electricityConsumption: electricityConsumption,
  //previousYearElectricityConsumption: previousYearElectricityConsumption
};

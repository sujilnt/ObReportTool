"use strict";
//const  getAlllocations =require("../Data/getAlllocations.json");
const gasData =require("../Data/gasData");
const {convertDate,totalKWH} = require("../utils/utils");
const {consumption} = require("./consumption");
const {filterData}= require("./filterData");
const {createJson} = require("../utils/createJson");
const {csvconverter} = require("../utils/csvconverter");
const getConsumptionData=async (reportDate="2018-10-14" ,type)=>{
  const deviceType= type || "MAINSUPPLY";
  console.log(deviceType,"--");
  const finalConsumptionData=[];
  const filteredEmptyLocation= await filterData(gasData); //chage to getAllLocations
  const filteredLocations= await filteredEmptyLocation.map(async (row)=>{
    const fromDate=convertDate(row.optimisedDate);
    const toDate= convertDate(reportDate);
    console.log(fromDate,toDate);
      const reference_devices = row.reference_devices.filter((row)=>row.type===deviceType);
      if(reference_devices[0] !== undefined) {
          const deviceId = reference_devices[0].device.id;
          const consumptionPromise = await consumption(fromDate, toDate, deviceId).then(values => {
            if(values.statusCode === 200){
              let data = JSON.parse(values.body);
              return data.values;
            }else {
              console.log("status Code", values.statusCode);
            }
        });
        row.totalConsumption = await totalKWH(consumptionPromise);
        row.totalConsumption !== 0 ? finalConsumptionData.push(row) : "";
        return row;
    }
  });
  let filteredLocationsPromise = await Promise.all(filteredLocations).then((data)=>{
    const writedate= data.filter((row)=> row!== undefined);
    console.log("promise",data);
    createJson("reading22",writedate);
    csvconverter(data);
     return data;
  });
  return filteredLocationsPromise;
};
module.exports.getConsumptionData = getConsumptionData;
/*
* */

"use strict";
const  getAlllocations =require("../Data/getAlllocations.json");
const {convertDate,totalKWH} = require("../utils/utils");
const {consumption} = require("./consumption");
const {filterData}= require("./filterData");
const getConsumptionData=async (reportDate,type)=>{
  const deviceType=type || "MAINSUPPLY";
  const toDate = convertDate(reportDate || "2018-10-14" );
  const finalConsumptionData=[];
  const filteredEmptyLocation= await filterData(getAlllocations);
  const filteredLocations= await filteredEmptyLocation.map(async (row)=>{
      const fromDate= row.optimisedDate;
      const reference_devices = row.reference_devices.filter((row)=>row.type===deviceType);
      if(reference_devices[0] !== undefined ) {
          const deviceId= reference_devices[0].device.id || null;
          const consumptionPromise = await consumption(fromDate, toDate, deviceId).then((data) => {
          const dataVal = JSON.parse(data);
          //console.log(data,JSON.parse(data), dataVal.values);
          return dataVal.values;
      });
        //console.log("consumptionPromise",consumptionPromise);
        row.totalConsumption = await totalKWH(consumptionPromise);
        row.totalConsumption !== 0 ? finalConsumptionData.push(row) : "";
        return row;
    }
  });

  return filteredLocations;
};
module.exports.getConsumptionData= getConsumptionData;
/*
* */

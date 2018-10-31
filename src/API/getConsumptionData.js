"use strict";
const {convertDate,totalKWH,lastYear} = require("../utils/utils");
const {consumption} = require("./consumption");
const {filterData}= require("./filterData");
const {createJson} = require("../utils/createJson");
//const {csvconverter} = require("../utils/csvconverter");
const managingDate = (previousYear,date)=>{
  return  previousYear === "lastYear" ? convertDate(lastYear(date)) : convertDate(date);
};
const getConsumptionData=(reportDate,type,dataToFilter,previousYear,params="D",paramkey="GASENERGY")=>{
  console.log("pre",previousYear);
  const finalConsumptionData=[];
  const deviceType= type || "MAINSUPPLY";
  const filteredEmptyLocation= filterData(dataToFilter); //change to getAllLocations //gasData
  const filteredLocations= filteredEmptyLocation.map(async (row)=>{
      const newrow={};
      const reference_devices = await row.reference_devices.filter((row)=>row.type===deviceType);
      if((reference_devices[0] !== undefined && typeof(reference_devices) ==="object") && (row.optimisedDate && reportDate)) {
          const fromDate = newrow.fromDate= managingDate(previousYear,row.optimisedDate);
          const toDate =newrow.toDate= managingDate(previousYear,reportDate);
          const queryType=newrow.queryType=type;
          const deviceId = newrow.key= reference_devices[0].device.id;
          const name= newrow.name=row.name;
          const optisideDates= newrow.optimisedDate=row.optimisedDate;
          const consumptionPromise = await consumption(fromDate, toDate, deviceId,paramkey,params).then(async(values) => {
            return await values.statusCode === 200 ? JSON.parse(values.body).values: "";
        });
        let totalconsumption = newrow.totalConsumption = await totalKWH(consumptionPromise);
        totalconsumption !== 0 && totalconsumption !== "0" ? finalConsumptionData.push(newrow) : "";
        return newrow;
    }
  });
  return filteredLocations;
};
module.exports.getConsumptionData = getConsumptionData;
/*
* */

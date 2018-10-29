"use strict";
const {convertDate,totalKWH,lastYear} = require("../utils/utils");
const {consumption} = require("./consumption");
const {filterData}= require("./filterData");
const {createJson} = require("../utils/createJson");
const {csvconverter} = require("../utils/csvconverter");

const getConsumptionData=async (reportDate="2018-10-14" ,type,dataToFilter,previousYear,params="D",paramkey="GASENERGY")=>{
  console.log("pre",previousYear);
  const deviceType= type || "MAINSUPPLY";
  const finalConsumptionData=[];
  const filteredEmptyLocation= await filterData(dataToFilter); //change to getAllLocations //gasData
  const filteredLocations= await filteredEmptyLocation.map(async (row)=>{
    const fromDate=await previousYear === true ? convertDate(lastYear(row.optimisedDate)) : convertDate(row.optimisedDate);
    const toDate = await previousYear === true ? convertDate(lastYear(reportDate)) : convertDate(reportDate);
    console.log("fff",fromDate,toDate);
      const reference_devices = row.reference_devices.filter((row)=>row.type===deviceType);
      if(reference_devices[0] !== undefined && typeof(reference_devices) ==="object" && row.optimisedDate) {
          const queryDate= row.queryDate = {fromDate,toDate};
          const reportDate= row.reportDate=toDate.toString();
          const queryType=row.queryType=type;
          const deviceId = row.key= reference_devices[0].device.id;
          const consumptionPromise = await consumption(fromDate, toDate, deviceId,paramkey,params).then(values => {
            return values.statusCode === 200 ? JSON.parse(values.body).values: "";
        });
        let totalconsumption = row.totalConsumption = await totalKWH(consumptionPromise);
        totalconsumption !== 0 && totalconsumption !== "0" ? finalConsumptionData.push(row) : "";
        return row;
    }
  });
  let filteredLocationsPromise = await Promise.all(filteredLocations).then((data)=>{
    const writedate= data.filter((row)=> row !== undefined);
    //createJson("reading22",writedate);
    //csvconverter(data);
     return data;
  });
  return filteredLocationsPromise;
};
module.exports.getConsumptionData = getConsumptionData;
/*
* */

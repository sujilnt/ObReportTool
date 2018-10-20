"use strict";
const  getAlllocations =require("../Data/getAlllocations.json");
const {convertDate,totalKWH} = require("../utils/utils");
const {consumption} = require("./consumption");
const {filterData}= require("./filterData");
const getConsumptionData=(reportDate,type)=>{
  const deviceType=type || "MAINSUPPLY";
  const toDate = convertDate(reportDate || "2018-10-14" );
  const finalConsumptionData=[];
  const filteredEmptyLocation= filterData(getAlllocations);
  filteredEmptyLocation.forEach(async (row)=>{
    let finalRow=null;
    const fromDate= row.optimisedDate;
    const reference_devices = row.reference_devices.filter((row)=>row.type===deviceType);
    if(reference_devices[0] !== undefined ) {
      const deviceId= reference_devices[0].device.id || null;
      await consumption(fromDate, toDate, deviceId).then((data) => {
        const eachDayConsumptionValues = data.values;
        row.totalConsuption = totalKWH(eachDayConsumptionValues);
        row.totalConsuption !== "0" ? finalConsumptionData.push(row) : "";
        finalRow = row;
        //console.log("finalConsumptionData", finalConsumptionData);
        return finalConsumptionData;
      });
    }
    //return finalConsumptionData.push(row);
   // console.log("inside getConsumption",reference_devices,deviceId,fromDate,toDate)
  });
};
module.exports.getConsumptionData= getConsumptionData();

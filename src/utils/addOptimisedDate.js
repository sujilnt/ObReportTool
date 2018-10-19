const {createJson} = require("./createJson");
const {convertDate} = require("./utils");
const addOptimisedDate=(siteNames, deviceNames)=>{
  //console.log("deviceName",deviceNames);
  //console.log("siteNames",siteNames, siteNames[0]["gsx$sitename"].$t);
   const finalData = deviceNames.map((row)=>{
     let index = siteNames.findIndex((siteName) => {
       return row.name === siteName["gsx$sitename"].$t;
     });
     index !== -1 ? row.optimisedDate = convertDate(siteNames[index]["gsx$optimisationdate"].$t) : "";
     //siteNames.indexOf(row.name);
     return row;
  });

  const fileCreate = createJson("getAlllocations.json",finalData);
};
module.exports.addOptimisedDate=addOptimisedDate;

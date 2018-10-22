const ObjectsToCsv = require('objects-to-csv');
const value =require("../Data/1");
const csvconverter= async (values)=>{
  const data = values|| [
    {code: 'HK', name: 'Hong Kong'},
    {code: 'KLN', name: 'Kowloon'},
    {code: 'NT', name: 'New Territories'},
  ] ;
  let csv = new ObjectsToCsv(data);
  console.log("csv",data);
  // Save to file:
  await csv.toDisk('./src/csv/report.csv');
  // Return the CSV file as string:
  console.log("wriiten to a file",await csv.toString());
};
module.exports.csvconverter=csvconverter;

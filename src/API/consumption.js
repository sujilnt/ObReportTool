const {fetchRequest}=require("./fetchRequest");
const consumption =async (fromDate,toDate,deviceID,paramkey,params)=>{
  const _url= `http://api.dexcell.com/v3/readings?from=${fromDate}&to=${toDate}&device_id=${deviceID}&parameter_key=${paramkey}&resolution=${params}&operation=DELTA`;
  return await fetchRequest(_url).then((data)=>data);
};
module.exports.consumption=consumption;

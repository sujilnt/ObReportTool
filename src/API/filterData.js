const filterData=(getAlllocations)=>{
  const filterDataWithOptimisedDates = getAlllocations.filter((row)=>{
    return row["reference_devices"] !== undefined ? row["reference_devices"].length !== 0 : "";
  });
  return filterDataWithOptimisedDates;
};
module.exports.filterData= filterData;

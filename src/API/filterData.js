const filterData=(getAlllocations)=>{
  const filterDataWithOptimisedDates = getAlllocations.filter((row)=>{
    const refrenceDevice= row["reference_devices"];
    return typeof(refrenceDevice) === "object" ?
      refrenceDevice !== undefined && refrenceDevice ? refrenceDevice.length !== 0 : ""
      : "";
  });
  return filterDataWithOptimisedDates;
};
module.exports.filterData= filterData;


/*
* convertDate() -> covert a normal date and ISO date and split the time section
* @params dateInput
* returns converted Date
* */
const convertDate= (dateInput)=>{
  if(dateInput !== undefined ){
    const dateInISO = new Date(dateInput).toISOString().replace(/[(:)]/g ,"%3A").split(".")[0];
    return dateInISO;
  }
};
/* numberFormatter () -> formatting the number by rounding and showing 2 decimal places
*   @params number
*   returns the converted Date
*/

const numberFormatter = (number)=>{
  return (Math.round(number*100)/100).toFixed(2);
};

// console.log(numberFormatter("48109.09999999999")); // 48109.10

const totalKWH = (data)=>{
  const resultArr=data;
  let sum=0;
  resultArr !== undefined  ? resultArr.map((row)=>{
    sum+=row.v;
  }): "no Data round!";
  return numberFormatter(sum) !== 0 ? numberFormatter(sum) : 0 ;
};

const lastYear=(date)=>{
  const currentDate = new Date(date);
  const currentYear = currentDate.getFullYear();
  const previuosYear= currentDate.setFullYear(currentYear-1);
  return currentDate;
};

const csvExport = (data)=>{
  const newblob = new Blob(data,{
    type: "text/csv;charset=utf-8;"
  });

  navigator.msSaveBlob(newblob, "filename.csv")
};

module.exports= {
  convertDate: convertDate,
  numberFormatter: numberFormatter,
  totalKWH:totalKWH,
  csvExport:csvExport,
  lastYear:lastYear
};

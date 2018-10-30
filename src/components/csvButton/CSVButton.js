import React from "react";
import { Button } from 'antd';
import {csvExport} from "../../utils/utils";
const downloadCsv = (data,fileName)=>{
  csvExport(data,fileName);
};
const generateFileName = (data)=>{
  const firstElement= data[0];
  const firReportName= firstElement.type;
  const secondName = firstElement["fromDate"].split("-")[0];
  return `${firReportName}${secondName}.csv`
};
const CSVButton=(props)=>{
  const headerColumn=  {fromDate: "fromData" , toDate:"toDate",queryType: "queryType" ,key: "key", name: "name" , optimisedDate:"optimisedDate", totalConsumption:"totalConsumption" };
  const dataSource= props.dataSource;
  const data = dataSource.unshift(headerColumn);
  const fileName = generateFileName(dataSource);
  return(
    <Button type="primary" icon="download" size={"small"} onClick={downloadCsv(data,fileName)}>csvDownload</Button>
  )
};
export default CSVButton;


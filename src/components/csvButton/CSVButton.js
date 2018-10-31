import React from "react";
import { Button } from 'antd';
import CsvDownloader from 'react-csv-downloader';
import PropTypes from "prop-types";
// coumn Header
const headerColumn=  [
  {
    id: "fromData",
    displayName: "fromData",
  }
  , {
    id: "toDate",
    displayName:"toDate"
  },
  {
    displayName: "queryType",
    id: "queryType"

  } ,
  {
    id: "key",
    displayName: "key"
  },
  {
    id: "name",
    displayName: "name"
  },
  {
    id: "optimisedDate",
    displayName:"optimisedDate"
  },
  {
    id:"totalConsumption",
    displayName: "totalConsumption"
  }
];
/*
*  generateFileName : - > A function that generates fileNames .
*  input : data Object
*  return names => nameofQueryType and Year
* */
const generateFileName = (data)=>{
  const firstElement= data[0];
  const firReportName= firstElement.queryType;
  const secondName = firstElement["fromDate"].split("-")[0];
  const name = `${firReportName}${secondName}.csv`;
  return name;
};
const CSVButton=(props)=>{
  const dataSource= props.dataSource;
  const fileName = generateFileName(dataSource);
  return(
    <div>
      <CsvDownloader
        filename={fileName}
        separator=","
        columns={headerColumn}
        datas={dataSource}
        text="DOWNLOAD"
      >
        <Button type="primary" icon="download" size={"default"} >csv export</Button>
      </CsvDownloader>
    </div>
  )
};
export default CSVButton;
CSVButton.PropTypes={
  dataSource: PropTypes.object.isRequired
};


"use strict";
import React,{PureComponent} from "react";
import { Spin, Alert,Table } from 'antd';
import CSVButton from "../csvButton/CSVButton";
const columns=[
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },{
    title: 'Query',
    dataIndex: 'queryType',
    key: 'queryType',
  },{
    title: 'TO Date',
    dataIndex: 'toDate',
    key: 'toDate',
  }, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Optimised Date',
    dataIndex: 'optimisedDate',
    key: 'optimisedDate',
  },{
    title: 'Total Consumption',
    dataIndex: 'totalConsumption',
    key: 'totalConsumption',
  }
];
const renderLoaderComponent=(reportType,reportDate)=>{
  const reportFor= reportType ==="EACTIVE" ? "electricity" : "GAS" ;
  return (
    <div>
      <Spin tip="Loading...">
        <Alert
          message={`Retrieving Data ${reportFor} upto the Date ${reportDate}`}
          description="Showing Results...."
          type="info"
        />
      </Spin>
    </div>
  )
};
const renderTable= (currentYearData)=>{
  return (<div style={{height:"100%"}}>
    <CSVButton
      columns={columns}
      dataSource={currentYearData}
    />
    <Table
      columns={columns}
      dataSource={currentYearData}
      pagination={true}
      pageSize={20}
      bordered={true}
    /></div>)
};
 const OBTable=(props)=>{
   const {YearData}=props;
   const removeFalseValues = YearData.filter((data)=>data!== undefined);
   console.log("props",[removeFalseValues],removeFalseValues);
   return (
     <div>
       {
         removeFalseValues.length < 1?
           renderLoaderComponent(reportType,reportDate)
           :renderTable(removeFalseValues)
       }
     </div>
   )
};
export default OBTable;
/**
 *
 * */

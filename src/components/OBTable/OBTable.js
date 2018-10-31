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
   return (
     <div>
       {
         YearData.length < 1?
           renderLoaderComponent(reportType,reportDate)
           :renderTable(YearData)
       }
       <CSVButton
         columns={columns}
         dataSource={YearData}
       />
     </div>
   )
};
export default OBTable;
/**
 *
 * */

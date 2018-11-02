"use strict";
import React,{PureComponent} from "react";
import { Spin, Alert,Table } from 'antd';
import CSVButton from "../csvButton/CSVButton";
import PropTypes from "prop-types";

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
const renderLoaderComponent=()=>{
  return (
    <div>
      <Spin tip="No data ">
        <Alert
          message="Press Shift + ctrl + I , see the console for the eroor"
          description="Server Down"
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
       <div className="csvbutton">
       <CSVButton
         columns={columns}
         dataSource={YearData}
       />
       </div>
       {
         YearData.length < 1 || YearData === undefined ?
           renderLoaderComponent()
           :renderTable(YearData)
       }
     </div>
   )
};
export default OBTable;
OBTable.propTypes={
  YearData: PropTypes.array.isRequired
};


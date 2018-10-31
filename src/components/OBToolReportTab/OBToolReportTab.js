import React from "react";
import { Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import OBTable from "../OBTable/OBTable"; //Table Component
/*
* renderTabPane () => Its geneators tabs based on the data ,
* here data is either last year or currentYear .
* */
const renderTabPane = (data)=>{
  const listofTabPane=[];
  Object.keys(data).forEach((row,index)=>{
    listofTabPane.push(
      <TabPane tab={row} key={`${row}`}>
        <OBTable
          YearData={data[row]}
        /></TabPane>
    );
  });
  return listofTabPane;
};
/*
* A stateless component that render Tab Component
* */
const  OBToolReportTab =(props)=>{
  const {tabledata}=props;
  return(
    <div>
      <Tabs
        defaultActiveKey={"currentYear"}
        tabPosition={"top"}
        style={{ minHeight: 220 }}
      >
        {renderTabPane(tabledata)}
      </Tabs>
    </div>);
};
export default OBToolReportTab;



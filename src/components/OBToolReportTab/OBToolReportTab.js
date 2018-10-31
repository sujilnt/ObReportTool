import React from "react";
import { Tabs} from 'antd';
import OBTable from "../OBTable/OBTable"; //Table Component
import PropTypes from "prop-types";

const TabPane = Tabs.TabPane; // TabPans

/*
* renderTabPane () => Its geneators tabs based on the data ,
* here data is either last year or currentYear .
* */
const renderTabPane = (data)=>{
  const listofTabPane=[];
  Object.keys(data).forEach((row)=>{
    const splitName = row.split("Year")[0];
    const firstName= splitName.charAt(0).toLocaleUpperCase() + splitName.substr(1);
    const name = `${firstName} Year Data`;
    listofTabPane.push(
      <TabPane tab={name} key={`${row}`}>
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
OBToolReportTab.propTypes ={
  tabledata : PropTypes.object.isRequired
};




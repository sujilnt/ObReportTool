"use strict";
import React,{PureComponent} from "react";
import {Button, DatePicker,Divider} from "antd";
import PropTypes from "prop-types";
import DataSelect from "../DataSelect/DataSelect";
import OBToolReportTab from "../OBToolReportTab/OBToolReportTab";
import {gasConsumption} from "../../API/gasConsumpiton";
import{electricityConsumption} from "../../API/electricityConsumption";
import OBMorrissonsDataUpdate from "../OBMorrissonsDataUpdate/OBMorrissonsDataUpdate";
import {getAlloptimisedDevices} from "../../API/getAlloptimisedDevices";
const dateFormat = `YYYY-MM-DD`;
class OBToolReport extends PureComponent{
  state={
    iconLoading:false,
    reportDate: "",
    reportType:"EACTIVE",
    tableData: []
  };
  fetchGasDetails=async()=>{
    const {reportDate} = this.state;
    const finalData= reportDate !== undefined ? await gasConsumption(reportDate).then(data=>data): "";
    this.setState(()=>{
      return {
        tableData: finalData
      }
    })
  };
  fetchElectricityDetails=async()=>{
    const {reportDate} = this.state;
    const finalData= reportDate !== undefined ?  await electricityConsumption(reportDate).then(data=>data) : "";
    console.log("fetchElectricityDetails",finalData);
    this.setState(()=>{
      return {
        tableData: finalData
      }
    })
  };

  fetchaApiResults = (type)=>{
    return type==="EACTIVE"|| type==="GASENERGY"?
       type==="GASENERGY" ? this.fetchGasDetails() : this.fetchElectricityDetails()
      : "currently focusing only reports on Electricity and Gas "
  };

  enterIconLoading =async () => {
    //this.setState({ iconLoading: true });
    this.fetchaApiResults(this.state.reportType);
  };
  selectChange=(value)=>{
    this.setState((prevState)=>{
     return prevState.reportType !== value && value ? {reportType:value}: prevState.reportType;
    });
  };
  dateChange=(e,value)=>{
    this.setState((prevState)=>{
      return prevState.reportDate !== value ? {reportDate:value}: prevState;
    });
  };
  UpdateData =(e)=>{
    console.log("called",e);
    getAlloptimisedDevices(e);
  };
  render(){
    const {reportDate,tableData,reportType}=this.state;
    return(
      <div className="container">
        <OBMorrissonsDataUpdate
          onChange={this.UpdateData}
        />
        <Divider orientation="left" style={{fontWeight: "200"}}>Generate Report</Divider>
        <div>
             <div style={{ padding: 24, background: '#fff' }} className="contentContainer">
               <div className="contentItem">
            <DatePicker format={dateFormat} onChange={this.dateChange}/>
          </div>
               <div className="contentItem">
                 <DataSelect
                   onChangeSelectOption={this.selectChange}
                   value={this.state.reportDate}
                 />
               </div>
               <div className="contentItem">
                 <Button type="primary" icon="snippets" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                   Generate Report
                 </Button>
               </div>
             </div>
            {tableData.length < 1 ? "" :
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}  className="contentContainer card ">
              <OBToolReportTab
                tabledata={tableData}
              />
          </div>
        }
      </div>
      </div>
    );
  }
}
export default OBToolReport;
OBToolReport.propTypes ={
  //dateFormat:PropTypes.string.isRequired
};

"use strict";
import React,{PureComponent} from "react";
import {Button, DatePicker} from "antd";
import PropTypes from "prop-types";
import DataSelect from "../DataSelect/DataSelect";
import OBToolReportTab from "../OBToolReportTab/OBToolReportTab";
import {gasConsumption} from "../../API/gasConsumpiton";
import{electricityConsumption} from "../../API/electricityConsumption";
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
  /*renderObTab=(reportDate,tableData,reportType)=>{
    console.log("called",tableData);
    return();
  }*/
  enterIconLoading =async () => {
    //this.setState({ iconLoading: true });
    //const typeofReport=
    console.log(this.state.reportType);
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

  render(){
    const {reportDate,tableData,reportType}=this.state;
    return(
      <div className="card">
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
            reportType={reportType}
            reportDate={reportDate}
          />
        </div>
        }
    </div>
    );
  }
}
export default OBToolReport;
OBToolReport.propTypes ={
  //dateFormat:PropTypes.string.isRequired
};

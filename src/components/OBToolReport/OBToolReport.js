"use strict";
import React,{PureComponent} from "react";
import {Button, DatePicker} from "antd";
import PropTypes from "prop-types";
import DataSelect from "../DataSelect/DataSelect";
import {currentYearGasConsumption,previousYearGasConsumption} from "../../API/gasConsumpiton";
import{currentYearElectricityConsumption,previousYearElectricityConsumption} from "../../API/electricityConsumption";
const dateFormat = `YYYY-MM-DD`;
class OBToolReport extends PureComponent{
  state={
    iconLoading:false,
    reportDate: "",
    reportType:"EACTIVE",
    gasData:[],
    electricityData:[]
  };
  fetchGasDetails=()=>{
    const {reportDate} = this.state;
    const finalData= reportDate !== undefined ? {
      currentYearData:  currentYearGasConsumption(reportDate) ,
      previousYearData: previousYearGasConsumption(reportDate)
    } : "";
    console.log("fetchGasDetails",finalData);
  };
  fetchElectricityDetails=()=>{
    const {reportDate} = this.state;
    const finalData= reportDate !== undefined ? {
      currentYearData:  currentYearElectricityConsumption(reportDate) ,
      previousYearData: previousYearElectricityConsumption(reportDate)
    } : "";
    console.log("fetchElectricityDetails",finalData);
  };

  fetchaApiResults = (type)=>{
    return type==="EACTIVE"|| type==="GASENERGY"?
       type==="GASENERGY" ? this.fetchGasDetails() : this.fetchElectricityDetails()
      : "currently focusing only reports on Electricity and Gas "
  };
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
    console.log("currentState",this.state);
    return(
      <div>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }} className="contentContainer">
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
    </div>
    );
  }
}
export default OBToolReport;
OBToolReport.propTypes ={
  //dateFormat:PropTypes.string.isRequired
};

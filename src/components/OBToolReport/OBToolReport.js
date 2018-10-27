import React,{Component} from "react";
import {Button, DatePicker} from "antd";
import PropTypes from "prop-types";
import DataSelect from "../DataSelect/DataSelect";
import {currentYearGasConsumption,previousYearGasConsumption} from "../../API/gasConsumpiton";
const dateFormat = `YYYY-MM-DD`;
class OBToolReport extends Component{
  state={
    iconLoading:false,
    reportDate: "",
  };

  enterIconLoading =async () => {
    const {reportDate } = this.state;
    //this.setState({ iconLoading: true });
    console.log(reportDate);
    const finaalData= reportDate !== undefined ? {
      currentYearData:  currentYearGasConsumption(reportDate) ,
      previousYearData: previousYearGasConsumption(reportDate)
    } : "";
    console.log("finalData",finaalData);
  };
  dateChange=async(e,value)=>{
   await this.setState((prevState)=>{
      return prevState.reportDate !== value ? {reportDate:value}: prevState
    });
  };

  render(){
    return(
      <div>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }} className="contentContainer">
          <div className="contentItem">
          <DatePicker format={dateFormat} onChange={this.dateChange}/>
        </div>
        <div className="contentItem">
          <DataSelect />
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

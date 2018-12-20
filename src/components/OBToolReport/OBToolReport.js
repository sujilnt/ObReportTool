"use strict";
import React,{PureComponent} from "react";
import OBLOGO from "../../img/OBLOGO.png";
import {
  Button,
  DatePicker,
  Divider,
  notification,
  Spin,
  Alert,
  Icon } from "antd";
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
    apiError:false,
    apiErrorData: {},
    tableData: []
  };
  fetchGasDetails=async()=>{
    const {reportDate} = this.state;
    const finalData= reportDate !== undefined ? await gasConsumption(reportDate).then(this.getData).catch(this.errorFunc): "";
    console.log("fetchGASDetails",finalData);
  };
  errorFunc=(error)=>{
    this.errormessageNotification(error);
    this.setState(()=>{
      return {
        apiError:true,
        apiErrorData:error
      }
    })
  };
  getData= (data)=>{
    this.setState(()=>{
      return {
        tableData: data
      };
    })
  };
  fetchElectricityDetails=async()=>{
    const {reportDate} = this.state;
    const finalData= reportDate !== undefined ?  await electricityConsumption(reportDate).then(this.getData).catch(this.errorFunc) : "";
    console.log("fetchElectricityDetails",finalData);
    console.log(this.state)
  };

  fetchaApiResults = (type)=>{
    return type==="EACTIVE"|| type==="GASENERGY"?
       type==="GASENERGY" ? this.fetchGasDetails() : this.fetchElectricityDetails()
      : "currently focusing only reports on Electricity and Gas ";
    
  };
  
  errormessageNotification =  (error)=>{
     notification["error"]({
      message: 'Status 429',
      description: 'DEXMA API request Failed , you have request limit for this hour .',
      icon: <Icon type="warning" style={{ color: '#f5222d' }} />,
      duration:6
    });
    
  };
  enterIconLoading =async () => {
    !this.state.apiError ?
      this.fetchaApiResults(this.state.reportType): "";
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
    getAlloptimisedDevices(e);
  };
  render(){
    const {
      reportDate,
      tableData,
      reportType,
      apiError
    }=this.state;
    return(
      <div className="container">
        <div className="flex-container impclass" >
          <div className="flex-item" >
          <img src={OBLOGO} style={{height: "37px"}}/>
          </div>
          <OBMorrissonsDataUpdate
            onChange={this.UpdateData}
          />
        </div>
        
        <Divider orientation="left" style={{fontWeight: "200"}}>Generate Report</Divider>
        <div>
             <div style={{ padding: 24, background: '#fff', margin: "5px 0" }} className="contentContainer card">
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
            {tableData.length < 1 && !apiError ? "" :
            <div style={{ padding: "8px 24px", background: '#fff', minHeight: 360 }}  className="contentContainer card ">
              {tableData.length < 1 ?
                <div style={{width: "100%"}}>
                  <Spin tip="Loading..." delay={500}>
                    <Alert
                      message="Kindly be patient"
                      description="You report is being pulled up."
                      type="info"
                    />
                  </Spin>,
                </div> :
                <OBToolReportTab
                  tabledata={tableData}
                />
              }
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

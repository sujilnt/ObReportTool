import React,{Component} from "react";
import {Button, DatePicker} from "antd";
import PropTypes from "prop-types";
import DataSelect from "../DataSelect/DataSelect";
import {getConsumptionData} from "../../API/getConsumptionData";
const dateFormat = `YYYY-MM-DD`;
class OBToolReport extends Component{
  state={
    iconLoading:false,

  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };
  dateChange=(e,s)=>{
    console.log(e,s);
    const data= getConsumptionData(s,"GAS").then(function(values){
      console.log("last one",values);
      console.log("inside layout",values.all)
    });
    console.log(data);
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

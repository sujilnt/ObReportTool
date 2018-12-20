import React, {Component} from "react";
import {Tag, InputNumber, Layout, Button} from 'antd';
import OBInputNumber from "../OBInputNumber/OBInputNumber";
import PropTypes from 'prop-types';
const { Header } = Layout;
import {getSessionstorageData} from "../../utils/utils";
const sessionsValues =getSessionstorageData("numberOFSites",{start:1,limit:250});
const limitValue = sessionsValues["limit"];
const startValue =  sessionsValues["start"];
class OBMorrissonsDataUpdate extends Component{
  state={
     loading:false,
      start: startValue,
      limit: limitValue,
  };
  handleInputNumberChange = (e)=>{
    this.setState(()=>e);
    console.log("called",e,this.state);
  };
  enableUpdate=(state)=>{
    const enableButton = state.start === 1 && state.limit === 500 ;
    return enableButton;
  };
  render(){
    const {limit,start}=this.state;
    const inputNumber = {limit,start};
    return(<div>
      {!this.state.loading ?
        <Header style={{background: '#fff', padding: 0}}>
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                  <OBInputNumber
                    reference={inputNumber}
                    id={"start"}
                    color="#74B943"
                    tagName="StartsWith"
                    size="small"
                    min={1}
                    max={1000}
                    defaultValue={1}
                    onChange={this.handleInputNumberChange}
                    stateValueVariable={"start"}
                    value={start}
                  />
              </div>
              <div className="flex-item">
                <OBInputNumber
                  reference={inputNumber}
                  id={"limit"}
                  color="red"
                  tagName="Limit Number of Requests"
                  size="small"
                  min={5}
                  max={500}
                  defaultValue={250}
                  onChange={this.handleInputNumberChange}
                  stateValueVariable={"limit"}
                  value={limit}
                />
              </div>
              <div className="flex-item">
                <Button type="danger" onClick={()=>{this.props.onChange({limit,start})}} disabled={this.enableUpdate(this.state)}>Data Update</Button>
              </div>
            </div>
          </div>
        </Header>
        : "loading..."
      }
    </div>);
  }
}

export default OBMorrissonsDataUpdate;

OBMorrissonsDataUpdate.propTypes ={
  onChange: PropTypes.func.isRequired,
};


import React, {Component} from "react";
import { Tag ,InputNumber ,Layout, Button } from 'antd';
import OBInputNumber from "../OBInputNumber/OBInputNumber";
import PropTypes from 'prop-types';
const { Header } = Layout;
class OBToolHeader extends Component{
  state={
     loading:false,
      start: 1,
      limit: 500,
  };
  handleInputNumberChange = (e)=>{
    this.setState(()=>{
      return e;
    });
    
  };
  enableUpdate=(state)=>{
    const enableButton = state.start === 1 && state.limit === 500 ;
    return enableButton;
  };
  render(){
    const {limit,start}=this.state;
    return(<div className="card">
      {!this.state.loading ?
        <Header style={{background: '#fff', padding: 0}}>
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                  <OBInputNumber
                    color="cyan"
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
                  color="red"
                  tagName="Limit Number of Requests"
                  size="small"
                  min={5}
                  max={1000}
                  defaultValue={500}
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

export default OBToolHeader;

OBToolHeader.propTypes ={
  onChange: PropTypes.func.isRequired,
};


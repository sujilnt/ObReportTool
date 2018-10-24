import React, {Component} from "react";
import { Layout, Button } from 'antd';
import PropTypes from 'prop-types';
const { Header } = Layout;
class OBToolHeader extends Component{
  state={
     loading:false,
      update:false,
  };
  render(){
    return(<div>
      {!this.state.loading ?
        <Header style={{background: '#fff', padding: 0}}>
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <Button type="danger" onClick={this.props.onChange}>Data Update</Button>
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


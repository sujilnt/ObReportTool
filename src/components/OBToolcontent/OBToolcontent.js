import React,{Component} from "react";
import PropTypes from 'prop-types';
import { Layout, Breadcrumb} from 'antd';
import OBToolReport from "../OBToolReport/OBToolReport";
const {Content}=Layout;

class OBToolcontent extends Component{
  state={
    iconLoading: false,
    loading:false
  };

  render(){
    return (
      <div className="card" style={{boxShadow: "none", paddingTop: "16px"}}>
        {!this.state.loading ? <Content style={{ margin: '0 16px 16px'}}>
          {/*<Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Report</Breadcrumb.Item>
            <Breadcrumb.Item>Morisson</Breadcrumb.Item>
          </Breadcrumb>*/}
          <OBToolReport />
        </Content>: "loading ..."}
      </div>
    )
  }
}
export default OBToolcontent;
OBToolcontent.propTypes ={
  // onChange: PropTypes.func.isRequired,
   //dateFormat:PropTypes.string.isRequired
};


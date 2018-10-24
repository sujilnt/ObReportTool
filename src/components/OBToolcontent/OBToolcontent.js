import React,{Component} from "react";
import PropTypes from 'prop-types';
import { Layout, Breadcrumb,DatePicker } from 'antd';
const {Content}=Layout;

class OBToolcontent extends Component{
  state={
    loading:false
  };
  render(){
    return (
      <div>
        {!this.state.loading ? <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Report</Breadcrumb.Item>
            <Breadcrumb.Item>Morisson</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <DatePicker format={this.props.dateFormat} onChange={this.props.onChange}/>

          </div>
        </Content>: "loading ..."}
      </div>
    )
  }
}
export default OBToolcontent;
OBToolcontent.propTypes ={
   onChange: PropTypes.func.isRequired,
   dateFormat:PropTypes.string.isRequired
};


import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {getAlloptimisedDevices} from "../../API/getAlloptimisedDevices";
import {getConsumptionData} from "../../API/getConsumptionData";
import OBToolcontent from "../OBToolcontent/OBToolcontent";
import OBToolHeader from "../OBToolHeader/OBToolHeader";
import OBToolFooter from "../OBToolFooter/OBToolFooter";
import "./Layout.css";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const dateFormat = `YYYY-MM-DD`;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  dateChange=(e,s)=>{
    console.log(e,s);
    const data= getConsumptionData(s,"GAS").then(function(values){
        console.log("last one",values);
      console.log("inside layout",values.all)
    });
    console.log(data);
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  UpdateData =(e)=>{
    console.log("called");
    getAlloptimisedDevices();
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu
              key="sub1"
              title={<span><Icon type="reconciliation" theme="outlined" /><span>Reports</span></span>}
            >
              <Menu.Item key="3" onClick={this.RenderReport}>Morrissons</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="audit" theme="outlined" /><span>DataCheck</span></span>}
            >
              <Menu.Item key="6">Morrissons</Menu.Item>
              <Menu.Item key="8">SuperDry</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <OBToolHeader
           onChange={this.UpdateData}
          />
         <OBToolcontent
          dateFormat={dateFormat}
          onChange={this.dateChange}
         />
          <OBToolFooter />
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;

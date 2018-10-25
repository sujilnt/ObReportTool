import React, { Component } from 'react';
import { Layout} from 'antd';
import {HashRouter,Switch,Link,Route,Router} from "react-router-dom";
import {getAlloptimisedDevices} from "../../API/getAlloptimisedDevices";
import {getConsumptionData} from "../../API/getConsumptionData";
import OBToolcontent from "../OBToolcontent/OBToolcontent";
import OBToolHeader from "../OBToolHeader/OBToolHeader";
import OBToolFooter from "../OBToolFooter/OBToolFooter";
import OBToolSidebar from "../OBToolSideBar/OBToolSideBar";
import "./Layout.css";
const { Sider } = Layout;

console.log(window.location);
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
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
         <OBToolSidebar
          />
        </Sider>
        <Layout>
          <OBToolHeader
           onChange={this.UpdateData}
          />
         <OBToolcontent />
          <OBToolFooter />
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;

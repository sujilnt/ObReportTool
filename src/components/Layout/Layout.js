import React, { PureComponent } from 'react';
import { Layout} from 'antd';
import {HashRouter,Switch,Link,Route,Router} from "react-router-dom";
import {getAlloptimisedDevices} from "../../API/getAlloptimisedDevices";
import {getConsumptionData} from "../../API/getConsumptionData";
import OBToolcontent from "../OBToolcontent/OBToolcontent";
import OBMorrissonsDataUpdate from "../OBMorrissonsDataUpdate/OBMorrissonsDataUpdate";
import OBToolFooter from "../OBToolFooter/OBToolFooter";
import OBToolSidebar from "../OBToolSideBar/OBToolSideBar";
import "./Layout.css";
const { Sider } = Layout;

console.log(window.location);
class SiderDemo extends PureComponent {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  render() {
    return (
      <Layout style={{ minHeight: '100vh',background: "#000000" }}>
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
         <OBToolcontent />
          <div className="fixedDIv">
            <OBToolFooter />
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;

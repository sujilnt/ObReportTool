import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import "./Layout.css";
const { Header, Content, Footer, Sider } = Layout;
import {getAlloptimisedDevices} from "../../API/getAlloptimisedDevices";
import { DatePicker } from 'antd';
import {getConsumptionData} from "../../API/getConsumptionData";
const SubMenu = Menu.SubMenu;
const dateFormat = `YYYY/MM/DD`;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  dateChange=(e,s)=>{
    console.log(e,s);
    getConsumptionData(s,"");
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
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <div className="container">
              <div className="flex-container">
                <div className="flex-item">
                 <Button type="danger" onClick={this.UpdateData}>Data Update</Button>
              </div>
              </div>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Report</Breadcrumb.Item>
              <Breadcrumb.Item>Morisson</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <DatePicker format={dateFormat} onChange={this.dateChange}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <a href="https://www.optimisedbuildings.com/"> Optimised Buildings</a> ©2018 Created by <a href="https://github.com/sujilnt">Sujil Anto Thomas</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;

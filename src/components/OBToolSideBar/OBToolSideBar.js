import React,{Component} from "react";
import {sideBarData} from "../../API/sideBarData";
import { Layout, Menu, Icon } from 'antd';
import {Link} from "react-router-dom";
const SubMenu = Menu.SubMenu;
const renderMenuItem=(data)=>{
  const renderMenuItemArr=[];
  const eachMenuItem= data.map((row)=>{
    renderMenuItemArr.push(<Menu.Item key={`${row}index`} ><Link to={row.url}>{row.name}</Link></Menu.Item>)
  });
  return renderMenuItemArr;
};
const renderSubMenu = (data)=>{
     const renderSubmenu=[];
     const eachSideBarMenu = data.map((row,index)=>{
       renderSubmenu.push(<SubMenu
        key={`${row.submenuName}index`}
        title={<span><Icon type={row.icon} theme="outlined" /><span>{row.submenuName}</span></span>}
       >
         {renderMenuItem(row.menuItems)}
       </SubMenu>);
     });
     return renderSubmenu;

};

const OBToolSidebar = ()=>{
  console.log(sideBarData);
  return (
    <div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {renderSubMenu(sideBarData)}
        </Menu>
    </div>
  );

};
export default OBToolSidebar;

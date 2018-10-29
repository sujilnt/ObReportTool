import React,{Component} from "react";
import { Tabs, Radio} from 'antd';
import OBTable from "../OBTable/OBTable";
const TabPane = Tabs.TabPane;
class OBToolReportTab extends Component{
  state={
    activeKey: "previousYearData1"
  };
  changetab= (activeKey) => {
    this.setState({ activeKey });
  };
  renderTabPane = (data)=>{
    const listofTabPane=[];
    Object.keys(data).forEach((row,index)=>{
      const takingRequireInformation =[
        {"name": "sujil",
          "id": "id11"
        }];
      const results = data[row];
      console.log("r0",results);
      listofTabPane.push(
        <TabPane tab={row} key={`${row}${index}`}><OBTable YearData={results}/></TabPane>
      );
    });
    return listofTabPane;
  };
  render(){
    const {tabledata}=this.props;
    console.log("tabledata",tabledata);
    return(
      <div>
        <Tabs
          activeKey={this.state.activeKey}
          tabPosition={"top"}
          style={{ minHeight: 220 }}
          onChange={this.changetab}
        >
          {this.renderTabPane(tabledata)}
        </Tabs>
      </div>)
  }
};
export default OBToolReportTab;



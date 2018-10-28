import { Table } from 'antd';
import React,{PureComponent} from "react";
const data1 = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
},{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'OptimisedDate',
  dataIndex: 'optimisedDate',
  key: 'optimisedDate',
}, {
  title: 'TotalConsumption',
  dataIndex: 'totalConsumption',
  key: 'totalConsumption',
}
];
const fetchpromiseresults=async (currentYearData)=>{

  console.log(removedUndefinedData,"fetchpromiseresults");
  return removedUndefinedData;
};
class OBTable extends PureComponent{
  state={
    rowData:[],
    loading:true
  };
  renderTable= (currentYearData)=>{
    return (<div style={{height:"100%"}}>
      <Table
      columns={columns}
      dataSource={currentYearData}
      pagination={true}
      pageSize={20}
      bordered={true}
    /></div>)
  };
  componentWillReceiveProps =(props)=>{
    const {currentYearData}=props;
    currentYearData ? currentYearData.then((response)=>{
      const removedUndefinedData = response.filter((data)=>data!== undefined);
      this.setState((prevState)=>{
        return {
          rowData:removedUndefinedData,
          loading: false
        }
      });
    }): "" ;

  };
   render(){
     const {rowData}=this.state;
     console.log(this.state.rowData,this.state.loading);
     return (
       <div>
         {
           this.state.loading &&this.state.rowData ? "Loading ....":this.renderTable(rowData)
         }
       </div>
     )
   }
};
export default OBTable;
/**
 *
 * */

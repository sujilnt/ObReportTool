import React,{PureComponent} from "react";
import { Spin, Alert,Table } from 'antd';
const columns=[
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },{
    title: 'Query',
    dataIndex: 'queryType',
    key: 'queryType',
  },{
    title: 'Type',
    dataIndex: 'Type',
    key: 'type',
  }, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Optimised Date',
    dataIndex: 'optimisedDate',
    key: 'optimisedDate',
  },{
    title: 'Total Consumption',
    dataIndex: 'totalConsumption',
    key: 'totalConsumption',
  }
];
class OBTable extends PureComponent{
  state={
    rowData:[],
    loading:true
  };
  renderLoaderComponent=(reportType,reportDate)=>{
    const reportFor= reportType ==="EACTIVE" ? "electricity" : "GAS" ;
    return (
      <div>
        <Spin tip="Loading...">
          <Alert
            message={`Retrieving Data ${reportFor} upto the Date ${reportDate}`}
            description="Showing Results...."
            type="info"
          />
        </Spin>
      </div>
    )
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
    const {rowData,loading}=this.state;
    const {reportType,reportDate}=this.props;
    console.log(this.state.rowData,this.state.loading);
    return (
      <div>
        {
          this.state.loading &&this.state.rowData ?
            this.renderLoaderComponent(reportType,reportDate)
            :this.renderTable(rowData)
        }
      </div>
    )
  }
};
export default OBTable;
/**
 *
 * */

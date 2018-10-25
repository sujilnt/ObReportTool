import React from "react";
import { Select } from 'antd';
import {reports} from "../../API/reportData";
const Option = Select.Option;

const handleChange=(value)=>{
  console.log(`selected ${value}`);
};

const renderOptions=(data)=>{
  const optionArr=[];
  typeof(data) === "object" ?
  data.forEach((row)=>{
    optionArr.push(<Option key={row.value} value={row.value} disabled={row.disable} >{row.name}</Option>);
  }) : "";
  return optionArr;
};


const DataSelect=()=>{
  return(<div>
    <Select defaultValue="electricity" style={{ width: 175 }} onChange={handleChange}>
      {renderOptions(reports)}
    </Select>
  </div>);
};
export default DataSelect;

import React from "react";
import { Select } from 'antd';
import {reports} from "../../API/reportData";
const Option = Select.Option;

const renderOptions=(data)=>{
  const optionArr=[];
  typeof(data) === "object" ?
  data.forEach((row)=>{
    optionArr.push(<Option key={row.value} value={row.value} disabled={row.disable} >{row.name}</Option>);
  }) : "";
  return optionArr;
};


const DataSelect=(props)=>{
  const {onChangeSelectOption}=props;
  return(<div>
    <Select defaultValue="EACTIVE" style={{ width: 175 }} onChange={onChangeSelectOption}>
      {renderOptions(reports)}
    </Select>
  </div>);
};
export default DataSelect;

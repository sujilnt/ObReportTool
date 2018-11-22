"use-strict";
import React from "react";
import {InputNumber, Tag} from "antd";

const onHandleChange=(e,stateValueVariable,onChange)=>{
  const oBInputNumber={};
  oBInputNumber[stateValueVariable]=e;
  onChange(oBInputNumber);
};
const OBInputNumber =(props)=>{
  const{ color,tagName,min,max,defaultValue,value,stateValueVariable,onChange }=props;
    return (
      <div>
        <Tag color={color}>{tagName}</Tag>
        <InputNumber size="small" min={min} max={max}  value ={value} defaultValue={defaultValue}
                     onChange={(e) => onHandleChange(e,stateValueVariable,onChange)}
        />
      </div>
    );
};
export default OBInputNumber;

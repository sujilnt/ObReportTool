"use-strict";
import React from "react";
import {InputNumber, Tag} from "antd";

const onHandleChange=(e,stateValueVariable,reference,id,onChange)=>{
  const sessionObject= {
    ...reference,
    [id]:e,
  };
  window.sessionStorage.setItem("numberOFSites",JSON.stringify(sessionObject));
  const oBInputNumber={};
  oBInputNumber[stateValueVariable]=e;
  onChange(oBInputNumber);
};
const OBInputNumber =(props)=>{
  const{ color,tagName,min,max,defaultValue,value,stateValueVariable ,reference,id,onChange }=props;
    return (
      <div>
        <Tag color={color}>{tagName}</Tag>
        <InputNumber size="small" min={min} max={max}  value ={value} defaultValue={defaultValue}
                     onChange={(e) => onHandleChange(e,stateValueVariable,reference,id,onChange)}
        />
      </div>
    );
};
export default OBInputNumber;

import React from "react";
import { Layout} from 'antd';
const { Footer } = Layout;
const OBToolFooter = ()=>{
  return(<div>
    <Footer style={{ textAlign: 'center',padding: "0.5rem 0"}}>
      <a href="https://www.optimisedbuildings.com/"> Optimised Buildings</a> ©2018 Created by <a href="https://github.com/sujilnt">Sujil Anto Thomas</a>
    </Footer>
  </div>)
};
export default OBToolFooter;

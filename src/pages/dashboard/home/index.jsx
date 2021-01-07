import { Row } from "antd";
import React, {Component} from "react";
import Row1 from './components/Row1';
import Row2 from './components/Row2';
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";

class Monitor extends Component{
  render(){
    return (
        <div>
          <Row1/>
          <br/>
          <Row2/>
          <br/>
          <Row3/>
          <br/>
          <Row4/>
    
        </div>
        
        

      
    );
  }
}

export default Monitor;

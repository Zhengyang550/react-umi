/**
 * 预测塔预测上报率
 * @returns {*}
 */
import React from 'react';
import { Progress } from 'antd';
export default class ShortTermForecast extends React.Component{
constructor(props){
  super(props);
  this.state = {
    shorts:[]
  }
}

componentDidMount(){
  fetch("https://mock.presstime.cn/mock/5ff456e48215df0020a8eba7/lsx/Row1")
.then(res => res.json())
.then(data =>{
  console.log(data); 
  this.setState({
    shorts:data.short
  })
})
}
render(){
  const{shorts}=this.state;


  return(

            <div className='SuperShortTermForecast'>
            <Progress type="circle" percent={shorts.WindTower} />
          </div>

  )
}
}

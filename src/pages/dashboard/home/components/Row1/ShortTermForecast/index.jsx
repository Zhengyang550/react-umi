/**
 * 短期预测上报率
 * @returns {*}
 */
// import { Progress } from 'antd';
// export default () => {
//   return (
//     <div className='SuperShortTermForecast'>
//       <Progress type="circle" percent={99} />
//     </div>
//   )
// }

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
  // const keys = Object.keys(shorts)
  // const res = [1,2,3].map((item,index)=>{

  //   return item + index
  // })

  return(
    // <div>
    //   {
        // <ul>
          // {
            <div className='SuperShortTermForecast'>
            <Progress type="circle" percent={shorts.ShortTerm} />
          </div>
            // keys.map((key)=>{
            //   // return <li key={key}> {shorts[key]}</li>
            //   return (
            //     <div className='SuperShortTermForecast'>
            //       <Progress type="circle" percent={shorts[key]} />
            //     </div>
            //   )
            // })
        //   }
        // </ul>

      // }

    // </div>
  )
}
}

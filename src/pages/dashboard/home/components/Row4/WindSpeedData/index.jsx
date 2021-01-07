/**
 * 风速对比数据
 * @returns {*}
 */
// export default () => {
//     return (
//       <div>填充图表</div>
//     )
//   }
import { Table } from 'antd';
const columns = [
  {
    title: '预测日期',
    dataIndex: 'time',
    render: text => <a>{text}</a>,
  },
  {
    title: '预测风速',
    className: 'forecastspeed',
    dataIndex: 'forecastspeed',
    align: 'right',
  },
  {
    title: '实际风速',
    dataIndex: 'actualspeed',
  },
  {
    title: '平均风速',
    dataIndex: 'averagespeed',
  },
  
];

const data = [
  {
    keye: '1',
    time: '2019-11-25 14：00：00',
    forecastspeed: '27.09',
    actualspeed:'111',
    averagespeed: '9.95',
    
  },
  {
    keye: '2',
    time: '2019-11-25 14：00：00',
    forecastspeed: '27.09',
    actualspeed:'222',
    averagespeed: '9.95',
    
  },
  {
    keye: '3',
    time: '2019-11-25 14：00：00',
    forecastspeed: '27.09',
    actualspeed:'11221',
    averagespeed: '9.95',
    
  },
  {
    keye: '4',
    time: '2019-11-25 14：00：00',
    forecastspeed: '27.09',
    actualspeed:'1312432',
    averagespeed: '9.95',
    
  },
];
export default () => {
    return (
      <div><Table
      columns={columns}
      dataSource={data}
      bordered
      // title={() => 'Header'}
      footer={() => ''}
    /></div>
      
    )
  }
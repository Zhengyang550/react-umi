/**
 * 功率对比数据
 * @returns {*}
 */
import { Table } from 'antd';
const columns = [
  {
    title: '时间',
    dataIndex: 'time',
    render: text => <a>{text}</a>,
  },
  {
    title: '实测',
    className: 'measured',
    dataIndex: 'measured',
    align: 'right',
  },
  {
    title: '超短期',
    dataIndex: 'supershortterm',
  },
  {
    title: '短期',
    dataIndex: 'shortterm',
  },
  
];

const data = [
  {
    key: '1',
    time: '2019-11-25 14：00：00',
    measured: '27.09',
    supershortterm:'',
    shortterm: '9.95',
    
  },
  {
    key: '1',
    time: '2019-11-25 14：00：00',
    measured: '27.09',
    supershortterm:'',
    shortterm: '9.95',
    
  },
  {
    key: '1',
    time: '2019-11-25 14：00：00',
    measured: '27.09',
    supershortterm:'',
    shortterm: '9.95',
    
  },
  {
    key: '1',
    time: '2019-11-25 14：00：00',
    measured: '27.09',
    supershortterm:'',
    shortterm: '9.95',
    
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
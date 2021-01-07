        
/**
 * 天气预报数据
 * @returns {*}
 */             
import{Table} from 'antd';  
const columns = [
  {
    title: '',
    dataIndex: 'logo',
  },
  {
    title: '',
    dataIndex: 'power',
  },
  {
    title: '',
    dataIndex: 'unit',
  },
];

const data = [
  {
    keya: '1',
    logo: '',
    power:'实时功率',
    unit: 'MW',
  },
  {
    keya: '2',
    logo: '',
    power:'短期功率预测',
    unit: '15.31MW',
  },
  {
    keya: '3',
    logo: '',
    power:'超短期功率预测',
    unit: '25.11MW',
  },
 
];
export default () => {
    return (
      <div><Table showHeader={false} columns={columns}dataSource={data}pagination={false} /></div>
    )
  }
  
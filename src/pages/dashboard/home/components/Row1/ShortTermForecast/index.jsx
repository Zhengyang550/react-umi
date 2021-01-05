/**
 * 短期预测上报率
 * @returns {*}
 */
import { Progress } from 'antd';



export default () => {
  return (
    <div className='ShortTermForecast'>
      <Progress type="circle" percent={75} />
    </div>
  )
}
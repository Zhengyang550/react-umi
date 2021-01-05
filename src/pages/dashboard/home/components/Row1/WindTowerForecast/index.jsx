/**
 * 预测塔预测上报率
 * @returns {*}
 */
import { Progress } from 'antd';
export default () => {
  return (
    <div className='WindTowerForecast'>
      <Progress type="circle" percent={0} />
    </div>
  )
}

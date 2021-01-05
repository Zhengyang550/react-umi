/**
 * 超短期预测上报率
 * @returns {*}
 */
import { Progress } from 'antd';
export default () => {
  return (
    <div className='SuperShortTermForecast'>
      <Progress type="circle" percent={99} />
    </div>
  )
}

/**
 * ht图元学习：https://www.hightopo.com/guide2/index.html
 * 文档中心：https://www.hightopo.com/guide2/index.html
 * HT API文档：http://www.hightopo.com/guide/doc/index.html
 * https://www.kancloud.cn/hightopo/structure/463423
 */
import React, {useState,useEffect} from 'react';
import {GridContent} from '@ant-design/pro-layout';
import {Card, Form, Tag} from 'antd';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import {connect} from 'umi';
import {SolidCircle} from './components/svg';

const FormItem = Form.Item;

//析构dashboardAndhightopo
const Articles = ({dispatch, dashboardAndhightopo: {list}, loading}) => {
  const [form] = Form.useForm();

  //设置选中所属类目
   const [selectCategory,setSelectCategory] = useState("1");

  //初始化
  useEffect(() => {
    dispatch({
      type: 'dashboardAndhightopo/fetch',
      payload: {
        count: 5
      }
    });
  }, []);

  const show = list.map(item=>{
    return (
      <li key={item.id}>
        <SolidCircle color='green'/>
        {item.owner}
      </li>
    )
  });


  return <React.Fragment>
    <GridContent>
      <Card bordered={false}>
        <Form
          layout='inline'
          form={form}
          //表单默认值，只有初始化以及重置时生效
          initialValues={{
            owner: ['wjh', 'zxx'],
          }}
          //字段值更新时触发回调事件
          onValuesChange={() => {
            dispatch({
              type: 'dashboardAndhightopo/fetch',
              payload: {
                count: selectCategory
              }
            });
          }}
        >
          <StandardFormRow
            title="所属类目"
            block
            style={{
              paddingBottom: 11,
            }}
          >
            <FormItem name="category">
              <TagSelect expandable  value={selectCategory} onChange={setSelectCategory}>
                <TagSelect.Option value="1">类目一</TagSelect.Option>
                <TagSelect.Option value="2">类目二</TagSelect.Option>
                <TagSelect.Option value="3">类目三</TagSelect.Option>
                <TagSelect.Option value="4">类目四</TagSelect.Option>
                <TagSelect.Option value="5">类目五</TagSelect.Option>
                <TagSelect.Option value="6">类目六</TagSelect.Option>
                <TagSelect.Option value="7">类目七</TagSelect.Option>
                <TagSelect.Option value="8">类目八</TagSelect.Option>
                <TagSelect.Option value="9">类目九</TagSelect.Option>
                <TagSelect.Option value="10">类目十</TagSelect.Option>
                <TagSelect.Option value="11">类目十一</TagSelect.Option>
                <TagSelect.Option value="12">类目十二</TagSelect.Option>
              </TagSelect>
            </FormItem>

            {/*<div>*/}
            {/*  当前数据{list}*/}
            {/*</div>*/}
          </StandardFormRow>
        </Form>
      </Card>

      <Card bordered={false} style={{marginTop:20}}>
        <ul>
          {show}
        </ul>
      </Card>
    </GridContent>
  </React.Fragment>

};

//connect第一个参数传入一个mapStateToProps函数  该函数参数是状态管理器的 state
export default connect(({dashboardAndhightopo, loading}) => ({
  dashboardAndhightopo,
  loading: loading.models.dashboardAndhightopo,
}))(Articles);

/**
 * ht图元学习：https://www.hightopo.com/guide2/index.html
 * 文档中心：https://www.hightopo.com/guide2/index.html
 * HT API文档：http://www.hightopo.com/guide/doc/index.html
 * https://www.kancloud.cn/hightopo/structure/463423
 */
import React, { useEffect } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import {Card,Form,Tag} from 'antd';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import { connect } from 'umi';

const FormItem = Form.Item;

const Articles =  ({dispatch,dashboardAndhightopo:{list},loading}) => {
  const [form] = Form.useForm();

  //初始化
  useEffect(()=>{
    dispatch({
      type:'dashboardAndhightopo/fetch',
      payload:{
        count:5
      }
    });
  },[]);

  return <React.Fragment>
    <GridContent>
    <Card bordered={false}>
      <Form
        layout='inline'
        form = {form}
        initialValues={{     //表单默认值，只有初始化以及重置时生效
          owner: ['wjh', 'zxx'],
        }}
        onValuesChange={()=>{   //字段值更新时触发回调事件
          dispatch({
            type:'dashboardAndhightopo/fetch',
            payload:{
              count:8
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
          <TagSelect expandable>
            <TagSelect.Option value="cat1">类目一</TagSelect.Option>
            <TagSelect.Option value="cat2">类目二</TagSelect.Option>
            <TagSelect.Option value="cat3">类目三</TagSelect.Option>
            <TagSelect.Option value="cat4">类目四</TagSelect.Option>
            <TagSelect.Option value="cat5">类目五</TagSelect.Option>
            <TagSelect.Option value="cat6">类目六</TagSelect.Option>
            <TagSelect.Option value="cat7">类目七</TagSelect.Option>
            <TagSelect.Option value="cat8">类目八</TagSelect.Option>
            <TagSelect.Option value="cat9">类目九</TagSelect.Option>
            <TagSelect.Option value="cat10">类目十</TagSelect.Option>
            <TagSelect.Option value="cat11">类目十一</TagSelect.Option>
            <TagSelect.Option value="cat12">类目十二</TagSelect.Option>
          </TagSelect>
        </FormItem>
        </StandardFormRow>
      </Form>
    </Card>
    </GridContent>
  </React.Fragment>

};

//connect第一个参数传入一个mapStateToProps函数  该函数参数是状态管理器的 state
export default connect(({dashboardAndhightopo,loading}) => ({
  dashboardAndhightopo,
  loading: loading.models.dashboardAndhightopo,
}))(Articles);

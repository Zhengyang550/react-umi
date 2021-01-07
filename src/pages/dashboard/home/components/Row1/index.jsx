import React from "react";
import { Row, Col,Card } from "antd";
import { FormattedMessage } from 'umi';
// import PowerGeneration from './PowerGeneration';
import ShortTermForecast from './ShortTermForecast';
import SuperShortTermForecast from './SuperShortTermForecast';
import WindTowerForecast from './WindTowerForecast';
import PredictState from "./PredictState";

export default () => {
  return (
    <Row gutter={24}>
      <Col 
        xl={6}
        lg={24}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <Card
          title={
            <FormattedMessage
              id="dashboardAndhome.home.row1.column1"
            />
          }
          bordered={false}
        >
          <ShortTermForecast />
        </Card>
      </Col>

      <Col 
        xl={6}
        lg={24}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <Card
          title={
            <FormattedMessage
              id="dashboardAndhome.home.row1.column2"
            />
          }
          bordered={false}
        >
          <SuperShortTermForecast />
        </Card>
      </Col>

      <Col 
        xl={6}
        lg={24}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <Card 
          title={
            <FormattedMessage
              id="dashboardAndhome.home.row1.column3"
            />
          }
          bordered={false}
        >
          <WindTowerForecast />
        </Card>
      </Col>

      {/* {/* <Col
        xl={5}
        lg={24}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <Card
          title={
            <FormattedMessage
              id="dashboardAndhome.home.row1.column4"
            />
          }
          bordered={false}
        >
          <WindTowerForecast />
        </Card>
      </Col> */}

      <Col
        xl={6}
        lg={24}
        md={24}
        sm={24}
        xs={24}
        style={{
          marginBottom: 24,
        }}
      >
        <Card
          title={
            <FormattedMessage
              id="dashboardAndhome.home.row1.column4"
            />
          }
          bordered={false}
        >
          <PredictState />
        </Card>
      </Col> 
    </Row>
  );
};

import React from "react";
import { Row, Col,Card } from "antd";
import { FormattedMessage } from 'umi';
// import PowerGeneration from './PowerGeneration';
import AnemometerData from './AnemometerData';
import PowerGeneration from './PowerGeneration';
import WeatherForecastData from './WeatherForecastData';
// import PredictioState from './PredictioState';

export default () => {
  return (
    <Row gutter={24}>
      <Col 
        xl={8}
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
              id="dashboardAndhome.home.row2.column1"
            />
          }
          bordered={false}
        >
          <PowerGeneration />
        </Card>
      </Col>

      <Col 
        xl={8}
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
              id="dashboardAndhome.home.row2.column2"
            />
          }
          bordered={false}
        >
          <WeatherForecastData />
        </Card>
      </Col>

      <Col 
        xl={8}
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
              id="dashboardAndhome.home.row2.column3"
            />
          }
          bordered={false}
        >
          <AnemometerData />
        </Card>
      </Col>

      {/* <Col
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
      </Col>

      <Col
        xl={4}
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
              id="dashboardAndhome.home.row1.column5"
            />
          }
          bordered={false}
        >
          <PredictioState />
        </Card>
      </Col> */}
    </Row>
  );
};

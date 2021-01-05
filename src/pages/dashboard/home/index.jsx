import React, {Component,Suspense} from "react";

import Row2 from './components/Row2';
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";
import { GridContent } from '@ant-design/pro-layout';
import PageLoading from './components/PageLoading';
const Row1 =  React.lazy(()=>import('./components/Row1'));


class Monitor extends Component{
  render(){
    return (
      <GridContent>
        <React.Fragment>
          <Suspense fallback={PageLoading}>
          <Row1/>
        </Suspense>
          <Suspense fallback={PageLoading}>
            <Row2/>
          </Suspense>
          <Suspense fallback={PageLoading}>
            <Row3/>
          </Suspense>
          <Suspense fallback={PageLoading}>
            <Row4/>
          </Suspense>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default Monitor;

import React, {Component,Suspense} from "react";

import { GridContent } from '@ant-design/pro-layout';
import PageLoading from './components/PageLoading';

const Row1 =  React.lazy(()=>import('./components/Row1'));
const Row2 =  React.lazy(()=>import('./components/Row2'));
const Row3 =  React.lazy(()=>import('./components/Row3'));
const Row4 =  React.lazy(()=>import('./components/Row4'));


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

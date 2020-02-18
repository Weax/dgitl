import React from 'react';
import Layout from './blocks/layout/Layout';
import ApiProceedContainer from './containers/ApiProceedContainer';

import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <ApiProceedContainer />
      </Layout>
    </Provider>
  )
}

export default App;
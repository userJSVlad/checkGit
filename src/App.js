import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Head from './companents/Head/Head';
import Aside from './companents/Aside/Aside'
import Main from './companents/Main/Main'

function App() {
  return (
    <>
      <Layout>
        <Head />
      </Layout>
      <Layout>
        <Aside />
        <Main />
      </Layout>
    </>
  );
}

export default App;

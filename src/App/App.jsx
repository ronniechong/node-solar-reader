import React from 'react';
// import DevTools from 'mobx-react-devtools';
import Weather from '../Weather/Weather';
import Solar from '../Solar/Solar';
import { observer } from 'mobx-react';
import { GlobalStyle, Layout } from './App.style';

@observer
export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Solar />
        <Weather />
        <GlobalStyle />
        {/* <DevTools /> */}
      </Layout>
    );
  }
};

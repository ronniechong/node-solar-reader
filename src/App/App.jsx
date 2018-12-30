import React from 'react';
// import DevTools from 'mobx-react-devtools';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Nav from '../common/Nav/Nav';
import Monitor from '../pages/Monitor/Monitor';
import Graph from '../pages/Graph/Graph';
// import Error from '../pages/Error/Error';
import { observer } from 'mobx-react';
import { GlobalStyle, Layout, Navigation, MainContent } from './App.style';

@observer
@withRouter
export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation>
          <Nav />
        </Navigation>
        <MainContent>
          {/* <Monitor /> */}
          <Route path="/monitor" component={Monitor} />
          <Route path="/graph" component={Graph} />

        </MainContent>
        <GlobalStyle />
        {/* <DevTools /> */}
      </Layout>
    );
  }
};

import React from 'react';
// import DevTools from 'mobx-react-devtools';
import { Route, withRouter } from 'react-router-dom';
import Nav from '../common/Nav/Nav';
import Monitor from '../pages/Monitor/Monitor';
import Graph from '../pages/Graph/Graph';
import Home from '../pages/Home/Home';
import { observer } from 'mobx-react';
import { GlobalStyle, Layout, Navigation, MainContent } from './App.style';

@withRouter
@observer
export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation>
          <Nav />
        </Navigation>
        <MainContent>
          <Route path="/monitor" render={Monitor} />
          <Route path="/graph" render={Graph} />
          <Route exact path="/" render={Home} />
        </MainContent>
        <GlobalStyle />
        {/* <DevTools /> */}
      </Layout>
    );
  }
}

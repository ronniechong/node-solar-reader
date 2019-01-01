import React from 'react';
// import DevTools from 'mobx-react-devtools';
import { Route, withRouter } from 'react-router-dom';
import Nav from '../common/Nav/Nav';
import Monitor from '../pages/Monitor/Monitor';
import Graph from '../pages/Graph/Graph';
// import Error from '../pages/Error/Error';
import { observer } from 'mobx-react';
import { GlobalStyle, Layout, Navigation, MainContent } from './App.style';

@withRouter
@observer
export default class App extends React.Component {
  render() {
    const Home = () => <div>Home</div>
    return (
      <Layout>
        <Navigation>
          <Nav />
        </Navigation>
        <MainContent>
          <Route path="/monitor" render={Monitor}/>
          <Route path="/graph" render={Graph}/>
        </MainContent>
        <GlobalStyle />
        {/* <DevTools /> */}
      </Layout>
    );
  }
};

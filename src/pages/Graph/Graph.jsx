import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import Visual from './Visual/Visual';

@withRouter
@observer
class Graph extends React.Component {
  render() {
    return (<div><Visual/></div>);
  }
}
export default Graph;

// const Graph = withRouter(observer(() => <div>Graph page</div>));

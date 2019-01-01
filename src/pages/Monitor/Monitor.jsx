import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Weather from './Weather/Weather';
import Solar from './Solar/Solar';
import { MonitorContainer } from './Monitor.style';
// const Monitor = withRouter(observer(() => (
//   <MonitorContainer>
//     <Solar />
//     <Weather />
//   </MonitorContainer>
// )));

@withRouter
@observer
class Monitor extends React.Component {
  render() {
    return (
      <MonitorContainer>
        <Solar />
        <Weather />
      </MonitorContainer>
    );
  }
}
export default Monitor;

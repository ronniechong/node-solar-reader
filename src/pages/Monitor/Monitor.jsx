import React from 'react';
import { observer } from 'mobx-react';
import Weather from './Weather/Weather';
import Solar from './Solar/Solar';
import { MonitorContainer } from './Monitor.style';
const Monitor = observer(() => (
  <MonitorContainer>
    <Solar />
    <Weather />
  </MonitorContainer>
));

export default Monitor;

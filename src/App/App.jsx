import React from 'react';
import DevTools from 'mobx-react-devtools';
import Weather from '../Weather/Weather';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Weather />
        <DevTools />
      </React.Fragment>
    );
  }
};

import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';
import { Container, Time, Date, AmPm } from './Home.style';

@withRouter
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.interval = undefined;
    this.state = {
      time: dayjs(),
    };
  }

  componentDidMount() {
   this.interval = setInterval(this.onSetInterval.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSetInterval() {
    this.setState({ time: dayjs() });
  }

  render() {
    return (
      <Container>
        <Time>
          { dayjs(this.state.time).format('hh:mm:ss') }
          <AmPm>
            { dayjs(this.state.time).format('a') }
          </AmPm>
        </Time>
        <Date>{ dayjs(this.state.time).format('D MMM YYYY') }</Date>
      </Container>
    );
  }
}

export default Home;

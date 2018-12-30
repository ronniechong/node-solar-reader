import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import dayjs from 'dayjs';
import { checkData, calculateKW, getColorStatus } from '../util/helpers';
import Button from '../common/Button/Button';
import SunIcon from '../common/icons/sun.svg';
import HomeIcon from '../common/icons/home.svg';
import TowerIcon from '../common/icons/tower.svg';
import Arrow from '../common/Arrow/Arrow';
import { Layout, Container, ListItem, DisplayValue, Direction, Timestamp, ButtonRefresh } from './Solar.style';

@inject('solarStore')
@observer
class Solar extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.onSetInterval.bind(this), process.env.DATAREFRESH);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onButtonClick() {
    this.props.solarStore.getSolar();
  }

  onSetInterval() {
    this.props.solarStore.getSolar();
  }

  renderData() {
    const { Head, Body } = this.props.solarStore.solarData;
    const { Site } = Body.Data;

    const getGeneratedStatus = () => {
      if (Site.P_PV <= 0) {
        return getColorStatus('normal');
      } else if (Site.P_PV > Math.abs(Site.P_Load)) {
        const threshold = Site.P_PV - Math.abs(Site.P_Load);
        if (threshold <= 200) {
          return getColorStatus('warning');
        }
        return getColorStatus('positive');
      } else {
        return getColorStatus('negative');
      }
    }

    //grid positive = drawing power
    //grid negative = feeding power
    return {
      generated: {
        ...calculateKW(Site.P_PV),
        state: getGeneratedStatus(),
        isNegative: (Site.P_PV > 0) ? false : true,
        direction: (Site.P_PV > 0) ? 'right' : 'none',
      },
      usage: {
        ...calculateKW(Site.P_Load),
        state: getColorStatus('normal'),
      },
      grid: {
        ...calculateKW(Site.P_Grid),
        state: (Site.P_Grid > 0) ? getColorStatus('negative') : getColorStatus('positive'),
        isNegative: (Site.P_Grid > 0) ? true : false,
        direction: (Site.P_Grid > 0) ? 'left' : 'right',
      },
      timestamp: dayjs(Head.Timestamp).format('DD MMM YYYY hh:mm:ss a'),

    };
  }

  render() {
    const { solarStore } = this.props;
    const check = checkData(solarStore.solarData);

    if (check && check.error) {
      return <Layout>Error: {JSON.stringify(check.error)}</Layout>;
    }

    if (!check) {
      return null;
    }

    const {timestamp, generated, usage, grid } = this.renderData();

    return (
      <Layout>
        {/* { JSON.stringify(this.props.solarStore.solarData) } */}
        <Container>
          <ListItem>
            <SunIcon width={60} height={60} />
            <DisplayValue color={generated.state} >
              {generated.value}&nbsp;{generated.unit}
            </DisplayValue>
          </ListItem>
          <Direction>
            <Arrow
              direction={generated.direction}
              isNegative={generated.isNegative}
            />
          </Direction>
          <ListItem>
            <HomeIcon width={60} height={60} />
            <DisplayValue color={usage.state}>
              {Math.abs(usage.value)}&nbsp;{usage.unit}
            </DisplayValue>
          </ListItem>
          <Direction>
            <Arrow
              direction={grid.direction}
              isNegative={grid.isNegative}
            />
          </Direction>
          <ListItem>
            <TowerIcon width={60} height={60} />
            <DisplayValue color={grid.state}>
            {grid.value}&nbsp;{grid.unit}
            </DisplayValue>
          </ListItem>
          <ButtonRefresh>
            <Button
              onButtonClick={this.onButtonClick}
              isLoading={solarStore.isLoading}
            />
          </ButtonRefresh>
          <Timestamp>
            Last update: {timestamp}
          </Timestamp>
        </Container>
      </Layout>
    );
  }
}

Solar.propTypes = {
  solarStore: PropTypes.object,
};

export default Solar;

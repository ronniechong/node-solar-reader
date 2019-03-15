import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import dayjs from 'dayjs';
import { ResponsivePie } from '@nivo/pie';
import { checkData, calculateKW, getColorStatus } from '../../../util/helpers';
import Button from '../../../common/Button/Button';
import SunIcon from '../../../common/icons/sun.svg';
import HomeIcon from '../../../common/icons/home.svg';
import TowerIcon from '../../../common/icons/tower.svg';
import Arrow from '../../../common/Arrow/Arrow';
import { Layout, Container, ListItem, DisplayValue, Direction, Timestamp, ButtonRefresh } from './Solar.style';

const thresholdMin = 200;

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
        if (threshold <= thresholdMin) {
          return getColorStatus('warning');
        }
        return getColorStatus('positive');
      } else {
        return getColorStatus('negative');
      }
    }

    const getArrowSize = (source) => {
      const num = source;
      if (num > 1000 && num < 1500) {
        return 0.85;
      } else if (num > 500 && num < 1000) {
        return 0.75;
      } else if (num > 0 && num < 500) {
        return 0.65;
      }
      return 1;
    }

    //grid positive = drawing power
    //grid negative = feeding power
    return {
      generated: {
        ...calculateKW(Site.P_PV),
        state: getGeneratedStatus(),
        isNegative: (Site.P_PV > 0) ? false : true,
        direction: (Site.P_PV > 0) ? 'right' : 'none',
        size: getArrowSize(Site.P_PV),
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
        size: getArrowSize(Site.P_Grid),
      },
      timestamp: dayjs(Head.Timestamp).format('DD MMM YYYY hh:mm:ss a'),

    };
  }

  renderContent() {
    const { solarStore } = this.props;
    const { timestamp, generated, usage, grid } = this.renderData();

    return (
      <React.Fragment>
        <ListItem>
          <SunIcon width={60} height={60} />
          <DisplayValue color={generated.state} >
            {generated.value}&nbsp;{generated.unit}
          </DisplayValue>
          <div>
            <ResponsivePie
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            />
          </div>
        </ListItem>
        <Direction>
          <Arrow
            direction={generated.direction}
            isNegative={generated.isNegative}
            size={generated.size}
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
            size={grid.size}
          />
        </Direction>
        <ListItem>
          <TowerIcon width={60} height={60} />
          <DisplayValue color={grid.state}>
          {Math.abs(grid.value)}&nbsp;{grid.unit}
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
      </React.Fragment>
    );
  }

  render() {
    const { solarStore } = this.props;
    const check = checkData(solarStore.solarData);
    if (check && check.error) {
      return (
        <Layout>
          <Container>
            Error Loading Solar data
          </Container>
        </Layout>
      );
    }

    return (
      <Layout>
        <Container>
          { check && this.renderContent() }
        </Container>
      </Layout>
    );
  }
}

Solar.propTypes = {
  solarStore: PropTypes.object,
};

export default Solar;

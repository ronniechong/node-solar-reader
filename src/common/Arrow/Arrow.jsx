import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ArrowLeftIcon from '../icons/arrowleft.svg';
import ArrowRightIcon from '../icons/arrowright.svg';
import { Container, Icon } from './Arrow.style';

const Arrow = observer((props) => {
  const { direction, isNegative } = props;
  let icon = <ArrowLeftIcon width={40} height={40} />;
  if (direction === 'right') {
    icon = <ArrowRightIcon width={40} height={40} />
  }

  if (direction === 'none') {
    icon = <span/>
  }

  return (
    <Container>
      <Icon
        direction={direction}
        isNegative={isNegative}
      >
        {icon}
      </Icon>
    </Container>
  );
})

Arrow.propTypes = {
  direction: PropTypes.string,
  isNegative: PropTypes.bool,
};

Arrow.defaultProps = {
  direction: 'right',
  isNegative: false,
};

export default Arrow;

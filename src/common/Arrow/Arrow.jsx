import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ArrowLeftIcon from '../icons/arrowleft.svg';
import ArrowRightIcon from '../icons/arrowright.svg';
import { Container, Icon, Size } from './Arrow.style';

const Arrow = observer((props) => {
  const { direction, isNegative, size } = props;
  let icon = <ArrowLeftIcon width={40} height={40} />;
  if (direction === 'right') {
    icon = <ArrowRightIcon width={40} height={40} />
  }

  if (direction === 'none') {
    icon = <span/>
  }

  return (
    <Container>
      <Size size={size}>
        <Icon
          direction={direction}
          isNegative={isNegative}
        >
          {icon}
        </Icon>
      </Size>
    </Container>
  );
})

Arrow.propTypes = {
  direction: PropTypes.string,
  isNegative: PropTypes.bool,
  size: PropTypes.number,
};

Arrow.defaultProps = {
  direction: 'right',
  isNegative: false,
  size: 1,
};

export default Arrow;

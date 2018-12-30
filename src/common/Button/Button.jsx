import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ReloadIcon from '../icons/reload.svg';
import { ButtonContainer, ButtonIcon } from './Button.style';

const Button = observer((props) => {
  const { onButtonClick, isLoading } = props;
  return (
    <ButtonContainer
      onClick={onButtonClick}
      disabled={isLoading}
    >
      <ButtonIcon isLoading={isLoading}>
        <ReloadIcon width={14} height={14}/>
      </ButtonIcon>
    </ButtonContainer>
  );
});

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;

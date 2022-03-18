import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export const Button = ({ text, disabled, children, onClick }) => {
  return (
    <Btn type="button" disabled={disabled} onClick={() => onClick()}>
      {text}
      {children}
    </Btn>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

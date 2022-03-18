import PropTypes from 'prop-types';

import { ContainerStyled } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerStyled className="container">{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.oneOf([PropTypes.element, PropTypes.node]),
};

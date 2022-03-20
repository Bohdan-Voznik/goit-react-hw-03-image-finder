import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Overlay, Image } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
static propTypes = { bar: PropTypes.string };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <Image src={this.props.img} />
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, Image } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
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

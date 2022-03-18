import { Component } from 'react';

import { Header, Wrapper } from './App.styled';

import { Container } from 'components/Container/Container';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    serchTag: null,
    modalImg: null,
  };

  handleFormSubmit = serchTag => {
    this.setState({ serchTag });
  };

  togleModal = (img = false) => {
    this.setState(prevState => {
      return {
        ...prevState,
        modalImg: img,
      };
    });
  };

  notify = (type, text) => {
    if (type === 'error') {
      toast.error(text, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (type === 'success') {
      toast.success(text, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (type === 'warning') {
      toast.warn(text, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  render() {
    return (
      <>
        <Header>
          <Container>
            <Searchbar onSerchSubmit={this.handleFormSubmit} />
          </Container>
        </Header>
        {this.serchTag !== null && (
          <Container>
            <Wrapper>
              <ImageGallery
                serchTag={this.state.serchTag}
                onItemlick={this.togleModal}
                notify={this.notify}
              />
            </Wrapper>
          </Container>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {this.state.modalImg && (
          <Modal img={this.state.modalImg} onClose={this.togleModal} />
        )}
      </>
    );
  }
}

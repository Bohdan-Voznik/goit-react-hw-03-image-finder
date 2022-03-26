import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Header, Wrapper, Text } from './App.styled';
import { fetchImagesByTag } from '../../js/fetchImages';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    serchTag: '',
    images: [],
    page: 1,
    pages: null,
    modalImg: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevTag = prevState.serchTag;
    const newtag = this.state.serchTag;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevTag !== newtag || (prevPage !== newPage && newPage !== 1)) {
      const { serchTag, page, pages } = this.state;
      this.setState({ loading: true });

      fetchImagesByTag(serchTag, page)
        .then(({ hits, totalHits, totalPages }) => {
          if (!hits.length) {
            throw new Error(
              'Sorry, there are no images matching your search query . Please try again.'
            );
          }

          if (page === 1) {
            this.notify('success', `Hooray! We found ${totalHits} images.`);
          }

          if (page === pages) {
            this.notify(
              'warning',
              `We're sorry, but you've reached the end of search results.`
            );
          }

          this.setState(prevState => {
            return {
              images: [...prevState.images, ...hits],
              pages: totalPages,
            };
          });
        })
        .catch(error => {
          this.notify('error', error.message);
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleFormSubmit = serchTag => {
    if (serchTag === this.state.serchTag) {
      this.notify('info', 'Please, enter another tag for your search.');
      return;
    }
    this.setState({ serchTag, images: [], page: 1, pages: null });
  };

  togleModal = (img = false) => {
    this.setState({ modalImg: img });
  };

  notify = (type, text) => {
    const options = {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    };

    if (type === 'error') {
      toast.error(text, options);
    }
    if (type === 'success') {
      toast.success(text, options);
    }
    if (type === 'warning') {
      toast.warn(text, options);
    }
    if (type === 'info') {
      toast.info(text, options);
    }
  };

  render() {
    const { images, loading, page, pages } = this.state;

    const isStartSearch = Boolean(images.length);
    const isNotStartSearch = !isStartSearch && !loading;
    const isShowLoadMore = !loading && page < pages;

    return (
      <>
        <Header>
          <Container>
            <Searchbar
              onSerchSubmit={this.handleFormSubmit}
              notify={this.notify}
            />
          </Container>
        </Header>
        <Container>
          <Wrapper>
            {isNotStartSearch && (
              <Text>
                Hey! We'll be happy to help you find the image you need.
              </Text>
            )}
            {isStartSearch && (
              <ImageGallery
                images={this.state.images}
                onItemlick={this.togleModal}
              />
            )}
            {isShowLoadMore && (
              <Button
                text="Load more..."
                disabled={false}
                onClick={this.loadMore}
              />
            )}
            {loading && (
              <Button text="Loading..." disabled={true}>
                <Loader />
              </Button>
            )}
          </Wrapper>
        </Container>
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

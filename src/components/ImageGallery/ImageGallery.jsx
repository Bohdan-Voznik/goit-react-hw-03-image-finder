import { Component } from 'react';
import PropTypes from 'prop-types';

import { Gallery, Text } from './ImageGallery.styled';
import ImagesApiService from '../../js/fetchImages';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

const imagesApiService = new ImagesApiService();

export class ImageGallery extends Component {
  state = {
    images: [],
    totalImages: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevTag = prevProps.serchTag;
    const newtag = this.props.serchTag;

    if (prevTag !== newtag) {
      this.setState({ images: [] });

      imagesApiService.resetSerch(this.props.serchTag);

      this.loadImages();
    }
  }

  loadImages = () => {
    this.setState({
      status: 'pending',
    });

    imagesApiService.fetchImagesByTag().then(({ hits, totalHits }) => {
      if (totalHits === 0) {
        this.props.notify(
          'error',
          'Sorry, there are no images matching your search query. Please try again.'
        );
        this.setState({
          images: [],
          totalImages: null,
          status: 'idle',
        });
        return;
      }

      if (imagesApiService.hits >= totalHits && imagesApiService.page !== 2) {
        this.props.notify(
          'warning',
          'We`re sorry, but you`ve reached the end of search results.'
        );
      }
      if (imagesApiService.page === 2) {
        this.props.notify('success', `Hooray! We found ${totalHits} images.`);
      }

      this.setState(prevState => {
        return {
          ...prevState,
          totalImages: totalHits,
          images: [...prevState.images, ...hits],
          status: 'resolved',
        };
      });
    });
  };

  render() {
    const { images, status, totalImages } = this.state;

    if (status === 'resolved' || status === 'pending') {
      return (
        <>
          <Gallery>
            {images.map(
              ({
                id,
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
              }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    prewImg={webformatURL}
                    largeImg={largeImageURL}
                    alt={tags}
                    likes={likes}
                    views={views}
                    comments={comments}
                    dowloads={downloads}
                    onItemlick={this.props.onItemlick}
                  />
                );
              }
            )}
          </Gallery>

          {status === 'resolved' && totalImages >= imagesApiService.hits && (
            <Button
              text="Load more..."
              disabled={false}
              onClick={this.loadImages}
            />
          )}

          {status === 'pending' && (
            <Button text="Loading..." disabled={true}>
              <Loader />
            </Button>
          )}
        </>
      );
    }

    if (status === 'idle') {
      return (
        <Text>Hey! We'll be happy to help you find the image you need.</Text>
      );
    }
  }
}

ImageGallery.propTypes = {
  serchTag: PropTypes.string.isRequired,
  onItemlick: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
};

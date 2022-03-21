import PropTypes from 'prop-types';

import { Gallery } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onItemlick }) => {
  return (
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
              onItemlick={onItemlick}
            />
          );
        }
      )}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      prewImg: PropTypes.string.isRequired,
      largeImg: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      dowloads: PropTypes.number.isRequired,
      onItemlick: PropTypes.func.isRequired,
    })
  ).isRequired,
  onItemlick: PropTypes.func.isRequired,
};

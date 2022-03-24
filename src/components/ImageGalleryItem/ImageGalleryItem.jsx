import PropTypes from 'prop-types';
import {
  ImageItem,
  Image,
  ImageInfo,
  ImageInfoItem,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  prewImg,
  largeImg,
  alt,
  likes,
  views,
  comments,
  downloads,
  onItemlick,
}) => {
  return (
    <ImageItem onClick={() => onItemlick(largeImg)}>
      <Image src={prewImg} alt={alt} />
      <ImageInfo>
        <ImageInfoItem>
          <b>Likes</b>
          <br />
          <span>{likes}</span>
        </ImageInfoItem>
        <ImageInfoItem>
          <b>Views</b>
          <br />
          <span>{views}</span>
        </ImageInfoItem>
        <ImageInfoItem>
          <b>Comments</b>
          <br />
          <span>{comments}</span>
        </ImageInfoItem>
        <ImageInfoItem>
          <b>Downloads</b>
          <br />
          <span>{downloads}</span>
        </ImageInfoItem>
      </ImageInfo>
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  prewImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onItemlick: PropTypes.func.isRequired,
};

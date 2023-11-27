import CSS from './index.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onItemClick }) => {
  return (
    <ul className={CSS.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

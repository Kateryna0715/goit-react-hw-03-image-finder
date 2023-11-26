import CSS from './index.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={CSS.galleryItem}>
      <img
        className={CSS.galleryImg}
        src={image.webformatURL}
        alt={image.tags}
        loading="lazy"
        width="300"
      />
    </li>
  );
};

export default ImageGalleryItem;

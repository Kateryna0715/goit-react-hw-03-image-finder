import CSS from './index.module.css';

const ImageGalleryItem = ({ image, onItemClick }) => {
  const handleClick = () => {
    onItemClick(image);
  };

  return (
    <li className={CSS.galleryItem} onClick={handleClick}>
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

import GalleryImage from "./GalleryImage";
import styles from "./ImageGallery.module.css";

export const ImageGallery = async ({
  images,
  transitionConfig = {},
  loadingBackgroundColor,
  isDefaultStyles = true,
  className,
  imageUrl,
  ...props
}) => {
  const _className = !isDefaultStyles
    ? className
    : `${className ? className + " " : ""}${styles.imageGallery}`;

  return (
    <div {...props} className={_className}>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          image={image}
          {...transitionConfig}
          loadingBackgroundColor={loadingBackgroundColor}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

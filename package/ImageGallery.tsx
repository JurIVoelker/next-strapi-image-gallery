import React from "react";
import GalleryImage from "./GalleryImage";
// @ts-ignore
import styles from "./ImageGallery.module.css";

export interface StrapiImage {
  attributes: {
    url: String;
    width: Number;
    height: Number;
  };
}

interface ImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: StrapiImage[];
  transitionConfig?: {
    transitionDuration?: string;
    transitionTimingFunction?: string;
  };
  className?: string;
  isDefaultStyles?: boolean;
  loadingBackground?: string;
  imageUrl?: string;
  defaultWidth?: number;
}

const ImageGallery = async ({
  images,
  transitionConfig = {},
  loadingBackground,
  isDefaultStyles = true,
  className,
  imageUrl,
  ...props
}: ImageGalleryProps) => {
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
          loadingBackground={loadingBackground}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default ImageGallery;

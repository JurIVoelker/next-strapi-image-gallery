// ImageGallery.d.ts

import { StrapiImage } from "./ImageGallery";

export interface ImageGalleryProps {
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

declare const ImageGallery: React.FC<ImageGalleryProps>;

export default ImageGallery;

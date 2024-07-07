// src/index.d.ts

interface StrapiImage {
  id: number;
  attributes: {
    url: string;
    width: string;
    height: string;
  };
}

export interface ImageGalleryProps {
  images: StrapiImage[];
  transitionConfig?: {
    transitionDuration?: string;
    transitionTimingFunction?: string;
  };
  loadingBackgroundColor?: string;
  isDefaultStyles?: boolean;
  className?: string;
  imageUrl?: string;
}

export function ImageGallery(props: ImageGalleryProps): JSX.Element;

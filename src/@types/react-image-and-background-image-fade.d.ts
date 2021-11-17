interface IBackgroundImageProps {
  src: string;
  width?: string;
  height?: string;
  transitionTime?: string;
  renderLoader?(): void;
  disableLoader?: boolean;
  wrapperClassName?: string;
  lazyLoad?: boolean;
  isResponsive?: boolean;
  useChild?: boolean;
  element: string;
}
interface IImageProps {
  src: string;
  width?: string;
  height?: string;
  transitionTime?: string;
  renderLoader?(): void;
  disableLoader?: boolean;
  wrapperClassName?: string;
  lazyLoad?: boolean;
  isResponsive?: boolean;
}
declare module 'react-image-and-background-image-fade' {
 const BackgroundImage: React.FC<IBackgroundImageProps>;
 const Image: React.FC<IImageProps>;

  export { BackgroundImage, Image };
}

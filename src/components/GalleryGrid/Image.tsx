import React from "react";

import "./GalleryGrid.scss";

export interface ImageProps {
  data: {
    title: string;
    outherLink: string;
    link: string;
  };
}

const Image: React.SFC<ImageProps> = ({
  data: { title, outherLink, link }
}) => {
  return (
    <div className="gallery-grid__item">
      <a
        className="gallery-grid__item-link"
        target="_blank"
        rel="noopener noreferrer"
        href={outherLink}
      >
        <img
          className="gallery-grid__item-image"
          crossOrigin="anonymous"
          src={link}
          alt={title}
        />
        <i className="fa fa-link gallery-grid__item-icon" aria-hidden="true" />
      </a>
    </div>
  );
};

export default Image;

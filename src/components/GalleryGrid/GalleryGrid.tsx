import React from "react";
import "./GalleryGrid.scss";
import cx from "classnames";
import { Constants } from "config/Constants";
import Image from "./Image";

export interface Photo {
  title: string;
  outherLink: string;
  link: string;
}

export interface GalleryGridProps {
  className?: string;
  photos: Photo[];
}

const GalleryGrid: React.SFC<GalleryGridProps> = ({ className, photos }) => {
  return (
    <div className={cx(className, " gallery-grid")}>
      {photos.length > 0 ? (
        photos.map(photo => <Image key={photo.link} data={photo} />)
      ) : (
        <h3>{Constants.STATEMETS.lackOfPhotos}</h3>
      )}
    </div>
  );
};

export default GalleryGrid;

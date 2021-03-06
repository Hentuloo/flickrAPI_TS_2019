import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "store/reducers";
import { getPhotos } from "store/actions/photosActions";
import MainTemplate from "templates/MainTemplate";
import GalleryGrid from "components/GalleryGrid/GalleryGrid";
import "./Gallery.scss";

import { Constants } from "config/Constants";

const Gallery = () => {
  const dispatch = useDispatch();
  const { errorMessage, photoFeched, photos } = useSelector(
    (state: Store) => state.photosReducer
  );

  useEffect(() => {
    if (!photoFeched) {
      dispatch(getPhotos());
    }
  }, [dispatch, photoFeched]);

  return (
    <MainTemplate title="Marilyn Monroe Gallery">
      <section className="galleryPage">
        {!photoFeched ? (
          <div className="galleryPage__spiner" title="Trwa ładowanie obrazków">
            <span className="galleryPage__spiner-text sr-only">
              {Constants.STATEMETS.waitForPhotos}
            </span>
            <div className="galleryPage__spiner-element spiner" />
          </div>
        ) : errorMessage ? (
          <div className="galleryPage__error">
            <i
              className="fa fa-exclamation-triangle galleryPage__error-icon"
              aria-hidden="true"
            />
            <span className="galleryPage__error-message">
              {Constants.errorMessage[errorMessage] ||
                Constants.errorMessage.default}
            </span>
          </div>
        ) : (
          <GalleryGrid
            className="galleryPage__images"
            photos={photos.slice(0, 9)}
          />
        )}
      </section>
    </MainTemplate>
  );
};

export default Gallery;

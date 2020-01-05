import { Dispatch } from "redux";

import { fetchJSONP } from "config/Utils";
import { Constants } from "config/Constants";
import { photosActions } from "./types";

export enum ErrorMessages {
  Timeout = "Timeout",
  default = "default"
}

export interface PhotosApi {
  items: [
    {
      title: string;
      link: string;
      media: {
        m: string;
      };
    }
  ];
}

export interface Photo {
  title: string;
  outherLink: string;
  link: string;
}

export interface fetchPhotosAction {
  type: photosActions.FETCH_PHOTOS;
  payload: null;
}
export interface GetPhotosAction {
  type: photosActions.FETCH_PHOTOS_SUCCESS;
  payload: Photo[];
}
export interface GetPhotosActionError {
  type: photosActions.FETCH_PHOTOS_FAILURE;
  payload: ErrorMessages;
}

export const getPhotos = () => (dispatch: Dispatch) => {
  dispatch<fetchPhotosAction>({
    type: photosActions.FETCH_PHOTOS,
    payload: null
  });
  fetchJSONP(
    Constants.API.marilynMonroePhotos,
    "jsonFlickrFeed",
    (error: { message: ErrorMessages }, data: PhotosApi) => {
      if (error) {
        dispatch<GetPhotosActionError>({
          type: photosActions.FETCH_PHOTOS_FAILURE,
          payload: error.message
        });
      } else {
        const { items } = data;
        const customItems: Photo[] = items.map(
          ({ title, link, media: { m } }) => {
            return { title, outherLink: link, link: m, sa: true };
          }
        );

        dispatch<GetPhotosAction>({
          type: photosActions.FETCH_PHOTOS_SUCCESS,
          payload: customItems
        });
      }
    }
  );
};

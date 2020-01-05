import {
  fetchPhotosAction,
  GetPhotosAction,
  GetPhotosActionError
} from "./photosActions";

export enum photosActions {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
}

export type Action = fetchPhotosAction | GetPhotosAction | GetPhotosActionError;

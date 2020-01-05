import { photosActions, Action, Photo, ErrorMessages } from "../actions";

export interface PhotosReducer {
  photoFeched: boolean;
  errorMessage: null | ErrorMessages;
  photos: Photo[];
}

const initialState: PhotosReducer = {
  photoFeched: false,
  errorMessage: null,
  photos: []
};

export default (
  state: PhotosReducer = initialState,
  action: Action
): PhotosReducer => {
  switch (action.type) {
    case photosActions.FETCH_PHOTOS:
      return state;
    case photosActions.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photoFeched: true,
        photos: action.payload
      };
    case photosActions.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        photoFeched: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

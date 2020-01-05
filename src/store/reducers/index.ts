import { combineReducers } from "redux";
import photosReducer, { PhotosReducer } from "./Photos";

export interface Store {
  photosReducer: PhotosReducer;
}

export default combineReducers<Store>({
  photosReducer
});

import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./ActionType";

export const DELETE = (MOVIEid) => {
  return {
    type: DELETE_MOVIE,
    payload: MOVIEid,
  };
};

export const ADD_MOV = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};
export const EDIT = (newMovie) => {
    return {
      type: EDIT_MOVIE,
      payload: newMovie,
    };
  };
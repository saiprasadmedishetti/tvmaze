import showsTypes from "./showsTypes";

export const getShowsStart = () => ({
  type: showsTypes.GET_SHOWS_START,
});

export const getShowsSuccess = (data) => ({
  type: showsTypes.GET_SHOWS_SUCCESS,
  payload: data,
});

export const getShowsFailure = (error) => ({
  type: showsTypes.GET_SHOWS_FAILURE,
  payload: error,
});

export const setFavorite = (data) => ({
  type: showsTypes.SET_FAVORITE,
  payload: data,
});

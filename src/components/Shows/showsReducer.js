import showsTypes from "./showsTypes";
const INITIALSTATE = {
  shows: [],
  favorites: [],
  isLoading: false,
};
const showsReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case showsTypes.GET_SHOWS_START:
      return {
        ...state,
        isLoading: true,
      };
    case showsTypes.GET_SHOWS_SUCCESS:
      const data =
        action.payload &&
        action.payload.length > 0 &&
        action.payload.map((show) => ({ ...show, isFavorite: false }));
      return {
        ...state,
        shows: data,
        isLoading: false,
      };
    case showsTypes.SET_FAVORITE:
      const newRecord = {
        ...action.payload,
        isFavorite: !action.payload.isFavorite,
      };
      const updatedShows = state.shows.map((show) => {
        if (show.id === action.payload.id) {
          return newRecord;
        } else {
          return show;
        }
      });

      const updatedFavorites = () => {
        if (action.payload.isFavorite) {
          return state.favorites.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          return [...state.favorites, newRecord];
        }
      };

      return {
        ...state,
        shows: updatedShows,
        favorites: updatedFavorites(),
      };

    default:
      return {
        ...state,
      };
  }
};
export default showsReducer;

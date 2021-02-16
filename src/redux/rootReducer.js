import { combineReducers } from "redux";
import showsReducer from "../components/Shows/showsReducer";

const appReducer = combineReducers({
  shows: showsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;

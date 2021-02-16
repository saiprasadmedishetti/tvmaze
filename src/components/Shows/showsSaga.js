import { takeLatest, put, all, call } from "redux-saga/effects";
import Axios from "../../axios/instance";
import showsTypes from "./showsTypes";
import { getShowsSuccess, getShowsFailure } from "./showsActions";

//-----------------get all markets----------------
export function* getShowsStart() {
  try {
    const response = yield Axios.get("/shows");
    if (response && response.data) {
      yield put(getShowsSuccess(response.data));
    }
  } catch (error) {
    yield put(getShowsFailure(error));
  }
}

export function* getShows() {
  yield takeLatest(showsTypes.GET_SHOWS_START, getShowsStart);
}

export function* showsSaga() {
  yield all([call(getShows)]);
}

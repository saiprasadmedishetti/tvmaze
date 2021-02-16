import { all, call } from "redux-saga/effects";
import { showsSaga } from "../components/Shows/showsSaga";

export default function* rootSaga() {
  yield all([call(showsSaga)]);
}

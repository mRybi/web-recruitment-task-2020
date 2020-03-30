import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { fetchBooksWithSearch } from "../api";
import { types } from "../constants";

export function* getQueriedBooksSaga(action = '') {
  try {
    const books = yield call(fetchBooksWithSearch, action.query);
    yield put(actions.setBooksActionSuccess(books));
  } catch (error) {
    yield put(actions.setBooksActionError(error));
  }
}

export default function* watchGetQueriedBooksLoad() {
  yield takeEvery(types.GET_QUERIED_BOOKS, getQueriedBooksSaga);
}

import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { fetchAllBooks } from "../api";
import { types } from "../constants";

export function* getAllBooksSaga() {
  try {
    const books = yield call(fetchAllBooks);
    yield put(actions.setBooksActionSuccess(books));
  } catch (error) {
    yield put(actions.setBooksActionError(error));
  }
}

export default function* watchGetAllBooksLoad() {
  yield takeEvery(types.GET_BOOKS, getAllBooksSaga);
}

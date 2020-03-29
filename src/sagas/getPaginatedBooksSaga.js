import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { fetchBooksPaginated } from "../api";
import { types } from "../constants";

export function* getPaginatedBooksSaga(action) {
  try {
    const books = yield call(fetchBooksPaginated, action.page, 10);
    console.log("QQQQsaga", books);
    yield put(actions.setBooksActionSuccess(books));
  } catch (error) {
    yield put(actions.setBooksActionError(error.toString()));
  }
}

export default function* watchGetPaginatedBooksLoad() {
  yield takeEvery(types.GET_PAGINATED_BOOKS, getPaginatedBooksSaga);
}

import { put, call, takeEvery } from 'redux-saga/effects';
import { getBooksActionSuccess, getBooksActionError } from '../actions/getBooks';
import { fetchBooksWithSearch } from '../api';
import { GET_QUERIED_BOOKS } from '../constants';

export function* getQueriedBooksSaga(action) {
    try {
        const books = yield call(fetchBooksWithSearch, action.query);
        yield put(getBooksActionSuccess(books));
    } catch (error) {
        yield put(getBooksActionError(error.toString()));
    }
}

export default function* watchGetQueriedBooksLoad() {
    yield takeEvery(GET_QUERIED_BOOKS, getQueriedBooksSaga);
}
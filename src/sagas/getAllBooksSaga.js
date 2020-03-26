import { put, call, takeEvery } from 'redux-saga/effects';
import { getBooksActionSuccess, getBooksActionError } from '../actions/getBooks';
import { fetchAllBooks } from '../api';
import { GET_BOOKS } from '../constants';

export function* getAllBooksSaga() {
    try {
        const books = yield call(fetchAllBooks);
        yield put(getBooksActionSuccess(books));
    } catch (error) {
        yield put(getBooksActionError(error.toString()));
    }
}

export default function* watchGetAllBooksLoad() {
    yield takeEvery(GET_BOOKS, getAllBooksSaga);
}
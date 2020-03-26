import { put, call, takeEvery } from 'redux-saga/effects';
import { getBooksActionSuccess, getBooksActionError } from '../actions/getBooks';
import { fetchBooksPaginated } from '../api';
import { GET_PAGINATED_BOOKS } from '../constants';

export function* getPaginatedBooksSaga() {
    try {
        const books = yield call(fetchBooksPaginated, 1, 4);
        yield put(getBooksActionSuccess(books));
    } catch (error) {
        yield put(getBooksActionError(error.toString()));
    }
}

export default function* watchGetPaginatedBooksLoad() {
    yield takeEvery(GET_PAGINATED_BOOKS, getPaginatedBooksSaga);
}
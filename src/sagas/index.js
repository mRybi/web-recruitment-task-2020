import { all } from 'redux-saga/effects';

import allBooksSaga from './getAllBooksSaga';
import paginatedBooksSaga from './getPaginatedBooksSaga';
import queriedBooksSaga from './getQueriedBooksSaga';

export default function* rootSaga() {
    yield all([allBooksSaga(), paginatedBooksSaga(), queriedBooksSaga()]);
}
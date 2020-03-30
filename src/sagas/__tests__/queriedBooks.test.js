import { runSaga } from "redux-saga";
import { takeEvery } from "redux-saga/effects";

import watchGetQueriedBooksLoad, { getQueriedBooksSaga } from "../getQueriedBooksSaga";

import { types } from "../../constants";
import { actions } from "../../actions";
import * as api from "../../api/index";



describe("fetch queried books from api - generation func test", () => {
  const genObject = watchGetQueriedBooksLoad();

  test("should wait for every GET_BOOKS action and call getQueriedBooksSaga", () => {
    expect(genObject.next().value).toEqual(
      takeEvery(types.GET_QUERIED_BOOKS, getQueriedBooksSaga)
    );
  });

  test("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("api call tests", () => {
  test("should call api and dispatch success action ", async () => {
    const dummyBooks = [
      { title: "book1", isbn: 1111 },
      { title: "book2", isbn: 2222 }
    ];
    const requestBooks = jest
      .spyOn(api, "fetchBooksWithSearch")
      .mockImplementation(() => Promise.resolve(dummyBooks));


    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getQueriedBooksSaga
    );


    expect(requestBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.setBooksActionSuccess(dummyBooks)]);
    requestBooks.mockClear();
  });

  test("should call api and dispatch error action ", async () => {
    const requestBooks = jest
      .spyOn(api, "fetchBooksWithSearch")
      .mockImplementation(() => Promise.reject());

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getQueriedBooksSaga
    );

    expect(requestBooks).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([actions.setBooksActionError()]);
    requestBooks.mockClear();
  });
});

import rootReducer, { initialState } from "./rootReducer";
import { types } from "../constants";

describe("rootReducer", () => {
  test("should return initial state", () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  test("should handle SET_BOOKS_SUCCESS", () => {
    const expectedState = {
      allBooksAmount: 0,
      currentBooks: [],
      isFetching: false
    };

    const reducer = rootReducer(
      {},
      {
        type: types.SET_BOOKS_SUCCESS,
        books: {
          data: []
        }
      }
    );

    expect(reducer).toEqual(expectedState);

    expect(
      rootReducer(expectedState, {
        type: types.SET_BOOKS_SUCCESS,
        books: {
          data: [{ title: "book1" }],
          pagination: { total: 10 }
        }
      })
    ).toEqual({
      allBooksAmount: 10,
      currentBooks: [{ title: "book1" }],
      isFetching: false
    });
  });

  test("should handle SET_BOOKS_ERROR", () => {
    const expectedState = {
      isFetching: false,
      hasError: true
    };

    const reducer = rootReducer(
      {},
      {
        type: types.SET_BOOKS_ERROR
      }
    );

    expect(reducer).toEqual(expectedState);
  });

  test("should handle ADD_TO_CART", () => {
    const initialState = {
      cartItems: [],
      allBooksAmount: 10,
      currentBooks: [{ title: "book1", isbn: 1111 }],
      isFetching: false,
      hasError: true
    };
    const expectedState = {
      allBooksAmount: 10,
      currentBooks: [{ title: "book1", isbn: 1111 }],
      cartItems: [{ title: "book1", isbn: 1111 }],
      isFetching: false,
      hasError: true
    };

    const reducer = rootReducer(initialState, {
      type: types.ADD_TO_CART,
      payload: { isbn: 1111 }
    });

    expect(reducer).toEqual(expectedState);
  });

  test("should handle REMOVE_FROM_CART", () => {
    const initialState = {
      allBooksAmount: 10,
      currentBooks: [{ title: "book1", isbn: 1111 }],
      cartItems: [{ title: "book1", isbn: 1111 }],
      isFetching: false,
      hasError: true
    };
    const expectedState = {
      allBooksAmount: 10,
      currentBooks: [{ title: "book1", isbn: 1111 }],
      cartItems: [],
      isFetching: false,
      hasError: true
    };

    const reducer = rootReducer(initialState, {
      type: types.REMOVE_FROM_CART,
      payload: { isbn: 1111 }
    });

    expect(reducer).toEqual(expectedState);
  });

  test("should handle GET_QUERIED_BOOKS", () => {
    const expectedState = {
      searchQuery: "Android",
      isFetching: true
    };

    const reducer = rootReducer(
      {},
      {
        type: types.GET_QUERIED_BOOKS,
        query: "Android"
      }
    );

    expect(reducer).toEqual(expectedState);
  });

  test("should handle GET_PAGINATED_BOOKS", () => {
    const expectedState = {
      currentPage: 2,
      isFetching: true,
      searchQuery: ""
    };

    const reducer = rootReducer(
      {},
      {
        type: types.GET_PAGINATED_BOOKS,
        page: 2
      }
    );

    expect(reducer).toEqual(expectedState);
  });

  test("should handle GET_BOOKS", () => {
    const expectedState = {
      isFetching: true,
      searchQuery: ""
    };

    const reducer = rootReducer(
      {},
      {
        type: types.GET_BOOKS
      }
    );

    expect(reducer).toEqual(expectedState);
  });
});

import {
  GET_BOOKS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_PAGINATED_BOOKS,
  GET_QUERIED_BOOKS
} from "../constants";

export const getBooksAction = () => ({
  type: GET_BOOKS,
});

export const getPaginatedBooksAction = (page) => ({
  type: GET_PAGINATED_BOOKS,
  page
});

export const getQueriedBooksAction = (query) => ({
  type: GET_QUERIED_BOOKS,
  query,
});

export const getBooksActionSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  books,
});

export const getBooksActionError = (error) => ({
  type: GET_BOOKS_ERROR,
  error,
});

export const addToCartAction = (isbn) => ({
  type: ADD_TO_CART,
  payload: { isbn },
});

export const removeFromCart = (isbn) => ({
  type: REMOVE_FROM_CART,
  payload: { isbn },
});


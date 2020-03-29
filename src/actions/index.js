import { types } from "../constants";

const getBooksAction = () => ({
  type: types.GET_BOOKS,
});

const getPaginatedBooksAction = (page) => ({
  type: types.GET_PAGINATED_BOOKS,
  page,
});

const getQueriedBooksAction = (query) => ({
  type: types.GET_QUERIED_BOOKS,
  query,
});

const setBooksActionSuccess = (books) => ({
  type: types.SET_BOOKS_SUCCESS,
  books,
});

const setBooksActionError = (error) => ({
  type: types.SET_BOOKS_ERROR,
  error,
});

const addToCartAction = (isbn) => ({
  type: types.ADD_TO_CART,
  payload: { isbn },
});

const removeFromCart = (isbn) => ({
  type: types.REMOVE_FROM_CART,
  payload: { isbn },
});

export const actions = {
  getBooksAction,
  getPaginatedBooksAction,
  getQueriedBooksAction,
  setBooksActionSuccess,
  setBooksActionError,
  addToCartAction,
  removeFromCart,
};

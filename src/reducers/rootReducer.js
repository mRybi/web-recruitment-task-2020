import { types } from "../constants";

export const initialState = {
  allBooksAmount: null,
  currentBooks: [],
  cartItems: [],
  isFetching: true,
  hasError: false,
  currentPage: 1,
  searchQuery: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentBooks: action.books.data,
        allBooksAmount: action.books.pagination
          ? action.books.pagination.total
          : action.books.data.length,
      };
    case types.SET_BOOKS_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          ...state.currentBooks.filter(
            (book) => book.isbn === action.payload.isbn
          ),
        ],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
            (book) => book.isbn !== action.payload.isbn
          ),
        ],
      };
    case types.GET_QUERIED_BOOKS:
      return {
        ...state,
        searchQuery: action.query,
        isFetching: true,
      };
    case types.GET_PAGINATED_BOOKS:
      return {
        ...state,
        currentPage: action.page,
        isFetching: true,
        searchQuery: "",
      };
    case types.GET_BOOKS:
      return {
        ...state,
        isFetching: true,
        searchQuery: "",
      };
    default:
      return state;
  }
};

export default rootReducer;

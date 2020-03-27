import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_BOOKS,
  GET_PAGINATED_BOOKS,
  GET_QUERIED_BOOKS
} from "../constants";

const initialState = {
  allBooksAmount: null,
  currentBooks: [],
  cartItems: [],
  isFetching: true,
  hasError: false,
  currentPage: 1,
  searchQuery: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentBooks: action.books.data,
        allBooksAmount: action.books.pagination ? action.books.pagination.total : action.books.data.length
      };
    case GET_BOOKS_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          ...state.currentBooks.filter((book) => book.isbn === action.payload.isbn),
        ],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
            (book) => book.isbn !== action.payload.isbn
          ),
        ],
      };
    case GET_QUERIED_BOOKS:
      return {
        ...state,
        searchQuery: action.query,
        isFetching: true,
      };
    case GET_PAGINATED_BOOKS:
      return {
        ...state,
        currentPage: action.page,
        isFetching: true,
        searchQuery: ''
      };
    case GET_BOOKS:
      return {
        ...state,
        isFetching: true,
        searchQuery: ''
      };
    default:
      return state;
  }
};

export default rootReducer;

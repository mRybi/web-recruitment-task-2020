import { GET_BOOKS_SUCCESS,GET_BOOKS_ERROR, ADD_TO_CART, REMOVE_FROM_CART, GET_BOOKS, GET_PAGINATED_BOOKS, GET_QUERIED_BOOKS } from '../constants';

const initialState = {books: [], cartItems: [], isFetching: true, hasError: false};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                isFetching: false, 
                books: action.books.data
            } 
        case GET_BOOKS_ERROR:
            return {
                ...state,
                isFetching: false, 
                hasError: true
            } 
        case ADD_TO_CART:
            return {
                ...state, 
                cartItems: [...state.cartItems, ...state.books.filter(book => book.isbn === action.payload.isbn)]
            } 
        case REMOVE_FROM_CART:
            return {
                ...state, 
                cartItems: [...state.cartItems.filter(book => book.isbn !== action.payload.isbn)]
            } 
        case GET_QUERIED_BOOKS:
            return {
                ...state,
                query: action.query,
                isFetching: true
            } 
        case GET_BOOKS:
        case GET_PAGINATED_BOOKS:
            return {
                ...state,
                isFetching: true
            } 
        default:
            return state
            // return {...state, books: [...state.books, ...fakeData]}
    }
    
}

export default rootReducer;

// export const GET_BOOKS = "GET_BOOKS";
// export const GET_PAGINATED_BOOKS = "GET_PAGINATED_BOOKS";
// export const GET_QUERIED_BOOKS = "GET_QUERIED_BOOKS";
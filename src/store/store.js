import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";
import {addToCartAction, getBooksAction, getQueriedBooksAction} from "../actions/getBooks";
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas';

// paginacja na dole currentPage w state jak sie zmieni to strzelaj po ?page=currentpage&limit=25
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware), devToolsEnhancer()));
sagaMiddleware.run(rootSaga)

// setTimeout(() => { store.dispatch(getBooksAction()); }, 2000);

// store.dispatch(getBooksAction());
// store.dispatch(getPaginatedBooksAction());
// store.dispatch(getQueriedBooksAction());



// store.dispatch(addToCartAction("1617290084"));
// store.dispatch(addToCartAction("1935182722"));

// setTimeout(() => { store.dispatch({type: 'REMOVE_FROM_CART', payload: { isbn: "1617290084"}}); }, 2000);


console.log(store.getState())

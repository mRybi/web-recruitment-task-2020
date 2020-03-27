import React, { useEffect, useState, useCallback } from "react";
import "@fortawesome/fontawesome-free/js/all";
import "bulma/css/bulma.css";
import "./App.css";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";
import { BookList } from "./components/BookList";
import { useSelector, useDispatch } from "react-redux";
import {
  getQueriedBooksAction,
  getPaginatedBooksAction
} from "./actions";

function App() {
  const [query, setQuery] = useState("");
  const {
    currentBooks,
    allBooksAmount,
    cartItems,
    currentPage,
    isFetching,
    hasError,
    searchQuery
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const itemsPerPage = 10;
  const howManyPages = Math.ceil(allBooksAmount / itemsPerPage);
  const pages = Array.from(Array(howManyPages).keys()).map(page => page + 1);

  useEffect(() => {
    dispatch(getPaginatedBooksAction(1));
  }, []);

  const handleSearch = useCallback((e) => {
    query.trim() == "" ? dispatch(getPaginatedBooksAction(1)) : dispatch(getQueriedBooksAction(query))
  }, [query])

  return (
    <Layout aside={<Cart />}>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <div className="search">
            <p className="title search-item-title"> Available books </p>
            <div className="field search-item-input">
              <div className="control">
                <input
                  value={query}
                  className="input"
                  type="text"
                  placeholder="Search for book"
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={e => {
                    if(e.keyCode === 13) {
                      handleSearch()                    
                    }
                  }}
                />
              </div>
            </div>
            <button
              className="button is-warning search-item-button"
              onClick={() => handleSearch()}
            >
              search
            </button>
          </div>

          {isFetching && (
            <progress className="progress is-large is-primary" max="100">
              15 %
            </progress>
          )}
          {hasError && (
            <p className="has-text-danger">
              Problem with connection to the API appeared
            </p>
          )}
          <BookList items={currentBooks} itemsInCart={cartItems} />

          {!searchQuery && (
            <div className="field paginated-buttons">
              {pages.length > 0 &&
                pages.map(page => (
                  <p key={page} className="control">
                    <button
                      className={`button ${page === currentPage &&
                        "is-active"}`}
                      onClick={() => dispatch(getPaginatedBooksAction(page))}
                    >
                      {page}
                    </button>
                  </p>
                ))}
            </div>
          )}

          {currentBooks.length === 0 && searchQuery != "" && 
          <div className="notification is-warning is-light">
            There is no books in store that match your query. Try with something else.
          </div>
        }
        </div>
      </div>
    </Layout>
  );
}

export default App;

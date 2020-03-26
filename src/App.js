import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/js/all";
import "bulma/css/bulma.css";
import "./App.css";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";
import { BookList } from "./components/BookList";
import { useSelector, useDispatch } from "react-redux";
import { getQueriedBooksAction, getBooksAction } from "./actions/getBooks";

function App() {
  const [query, setQuery] = useState('');
  const { books, cartItems, isFetching, hasError } = useSelector(
    state => state
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

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
								onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <button
            className="button is-warning search-item-button"
            onClick={() => dispatch(getQueriedBooksAction(query))}
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
          <BookList items={books} itemsInCart={cartItems} />
        </div>
      </div>
    </Layout>
  );
}

export default App;

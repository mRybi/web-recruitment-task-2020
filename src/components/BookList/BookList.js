import React from "react";
import { BookListType } from "../../types";
import { BookListItem } from "./BookListItem";

export const BookList = ({ items, itemsInCart }) => {
  const books =
    items &&
    items.map((item) =>
      itemsInCart.map((i) => JSON.stringify(i)).includes(JSON.stringify(item))
        ? { ...item, inCart: true }
        : { ...item, inCart: false }
    );

  return (
    <div className="books_list">
      {books &&
        books.map((item) => (
          <div className="box" key={item.isbn}>
            <BookListItem inCart={item.inCart} item={{ ...item }} />
          </div>
        ))}
    </div>
  );
};

BookList.propTypes = {
  items: BookListType.isRequired,
  itemsInCart: BookListType.isRequired
};

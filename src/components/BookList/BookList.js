import React from "react";
import { BookListType } from "../../types";
import { BookListItem } from "./BookListItem";

export const BookList = ({ items }) => (
    <div className="books_list">
        {items.map(item => (
            <div className="box" key={item.isbn}>
                <BookListItem
                    inCart={false}
                    item={item}
                />
            </div>
        ))}
    </div>
);

BookList.propTypes = {
    items: BookListType.isRequired,
};

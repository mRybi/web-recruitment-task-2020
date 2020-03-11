import React from "react";
import PropTypes from "prop-types";
import {  BookType } from "../../../types";
import { priceFormatter } from "../../../helpers";

export const CartItem = ({ item, onRemove }) => {
    const { title, price, isbn } = item;
    const handleRemove = () => onRemove(isbn);

    return (
        <tr className="cart_price-row">
            <td>{title}</td>
            <td>{priceFormatter(price)}</td>
            <td>
                <button
                    className="button is-danger is-inverted"
                    onClick={handleRemove}
                >
                    <span className="icon">
                        <i className="fas fa-trash"></i>
                    </span>
                </button>
            </td>
        </tr>
    );
};

CartItem.propTypes = {
    item: BookType.isRequired,
    onRemove: PropTypes.func.isRequired,
};

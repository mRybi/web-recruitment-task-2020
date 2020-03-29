import React from "react";
import PropTypes from "prop-types";
import { BookType } from "../../../types";
import { priceFormatter } from "../../../helpers";

export const CartItem = ({ item, onRemove }) => {
  const { title, price, isbn } = item;
  const handleRemove = () => onRemove(isbn);

  return (
    <tr className="cart_price-row">
      <td data-testid="title">{title}</td>
      <td data-testid="price">{priceFormatter(price)}</td>
      <td>
        <button
          data-testid="remove-button"
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

import React from "react";
import { EmptyCart } from "./EmptyCart";
import { CartItemsList } from "./CartItemsList";
import { priceFormatter } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions";

const calculateDiscount = (items) => {
  const specialOfferItems = items.filter((item) => item.specialOffer);
  const sortedByPrice = specialOfferItems.sort((a, b) =>
    a.price > b.price ? 1 : -1
  );

  return sortedByPrice
    .slice(0, Math.floor(specialOfferItems.length / 3))
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);
};

export const Cart = () => {
  const cartRedux = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const subTotal = cartRedux
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);
  const discount = calculateDiscount(cartRedux);
  const total = (subTotal - discount).toFixed(2);
  return (
    <div className="tile is-parent">
      <div className="tile is-child box">
        <h4 data-testid="cart-header" className="title is-4">
          Your cart
        </h4>
        <hr />
        {cartRedux.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartItemsList
            items={cartRedux}
            onRemoveItem={(isbn) => dispatch(actions.removeFromCart(isbn))}
          />
        )}
        <div className="columns">
          <div className="column">Subtotal:</div>
          <div
            data-testid="subtotal"
            className="column has-text-right is-size-6"
          >
            {priceFormatter(subTotal)}
          </div>
        </div>
        <div className="columns">
          <div className="column">Discount:</div>
          <div
            data-testid="discount"
            className="column has-text-right is-size-6"
          >
            {priceFormatter(discount)}
          </div>
        </div>
        <div className="columns">
          <div className="column">Total:</div>
          <div className="column  has-text-right is-size-4">
            <strong data-testid="total">{priceFormatter(total)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

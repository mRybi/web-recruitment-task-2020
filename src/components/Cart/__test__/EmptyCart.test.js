import React from "react";
import { EmptyCart } from "../EmptyCart";
import { render } from "@testing-library/react";

describe("EmptyCart component", () => {
  test("renders correctly", () => {
    const { getByText } = render(<EmptyCart />);
    const emptyCartText = getByText(/Your cart is empty!/i);
    expect(emptyCartText).toBeInTheDocument();
  });
});

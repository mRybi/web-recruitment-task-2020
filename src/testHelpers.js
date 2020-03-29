import React from "react";

import rootReducer from "./reducers/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export default function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {},
  renderFn = render
) {
  const obj = {
    ...renderFn(<Provider store={store}>{ui}</Provider>),
    store,
  };
  obj.rerenderWithRedux = (el) => renderWithRedux(el, { store }, obj.rerender);
  return obj;
}

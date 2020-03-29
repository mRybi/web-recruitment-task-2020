import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import renderWithRedux from "./testHelpers";

test("renders correctly", () => {
  const { getByText } = renderWithRedux(<App />);
  const linkElement = getByText(/Available books/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders when there is no books', () => {
//   const { getByText } = renderWithRedux(<App />, {
//     initialState: { currentBooks: [] },
//   })
//   // const noItemsForQuery = getByText(/There is no books in store that match your query./i);
//   // expect(noItemsForQuery).toBeInTheDocument();
// })

// test('renders no books for search criteria', () => {
//   const { getByText } = renderWithRedux(<App />, {
//     initialState: { currentBooks: [], searchQuery: 'Android' },
//   })
//   const noItemsForQuery = getByText(/There is no books in store that match your query./i);
//   expect(noItemsForQuery).toBeInTheDocument();
// })

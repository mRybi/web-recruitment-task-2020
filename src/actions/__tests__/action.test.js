import { types } from "../../constants";
import { actions } from "../../actions/index";

describe("actions", () => {
  it("should create an action to get books", () => {
    const expectedAction = {
      type: types.GET_BOOKS,
    };
    expect(actions.getBooksAction()).toEqual(expectedAction);
  });

  it("should create an action to get paginated books", () => {
    const page = 1;
    const expectedAction = {
      type: types.GET_PAGINATED_BOOKS,
      page: 1,
    };
    expect(actions.getPaginatedBooksAction(page)).toEqual(expectedAction);
  });

  it("should create an action to get queried books", () => {
    const query = 1;
    const expectedAction = {
      type: types.GET_QUERIED_BOOKS,
      query: 1,
    };
    expect(actions.getQueriedBooksAction(query)).toEqual(expectedAction);
  });

  it("should create an action to set get book action success", () => {
    const books = [{ title: "book1" }, { title: "book2" }];
    const expectedAction = {
      type: types.SET_BOOKS_SUCCESS,
      books: [{ title: "book1" }, { title: "book2" }],
    };
    expect(actions.setBooksActionSuccess(books)).toEqual(expectedAction);
  });

  it("should create an action to set get book action error", () => {
    const error = "There was a problem with books API";
    const expectedAction = {
      type: types.SET_BOOKS_ERROR,
      error: "There was a problem with books API",
    };
    expect(actions.setBooksActionError(error)).toEqual(expectedAction);
  });

  it("should create an action to add book to cart", () => {
    const isbn = 1111;
    const expectedAction = {
      type: types.ADD_TO_CART,
      payload: { isbn: 1111 },
    };
    expect(actions.addToCartAction(isbn)).toEqual(expectedAction);
  });

  it("should create an action to remove book from cart", () => {
    const isbn = 1111;
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      payload: { isbn: 1111 },
    };
    expect(actions.removeFromCart(isbn)).toEqual(expectedAction);
  });
});

const API_URL = `https://dor-web-book-store-api.herokuapp.com`;
const ALL = `get-all-books`;
const PAGINATION = `get-books`;
const SEARCH = `search-books`;

export const fetchAllBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/${ALL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchBooksPaginated = async (page, limit) => {
  try {
    const response = await fetch(
      `${API_URL}/${PAGINATION}?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchBooksWithSearch = async query => {
  try {
    const response = await fetch(`${API_URL}/${SEARCH}?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

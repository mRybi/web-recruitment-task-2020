const API_URL = `https://dor-web-book-store-api.herokuapp.com`;
const ALL = `get-all-books`;
const PAGINATION = `get-books`;
const SEARCH = `search-books`;

export const fetchAllBooks = async () => {
  const response = await fetch(`${API_URL}/${ALL}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }

  return data;
};

export const fetchBooksPaginated = async (page, limit) => {
  const response = await fetch(
    `${API_URL}/${PAGINATION}?page=${page}&limit=${limit}`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }

  return data;
};

export const fetchBooksWithSearch = async (query) => {
  const response = await fetch(`${API_URL}/${SEARCH}?q=${query}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  
  return data;
};

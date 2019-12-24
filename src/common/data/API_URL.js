export const API_URL = "https://reqres.in/api/products";

export const getPageAPI = page => API_URL + `?page=${page}&per_page=6`;

export const getByIdAPI = id => API_URL + `/${id}`;

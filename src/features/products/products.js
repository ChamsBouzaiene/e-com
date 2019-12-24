// Following the redux style Guide Duck Pattern
import axios from "axios";
import { getPageAPI, getByIdAPI } from "../../common/data/API_URL";

// Types

// Products
const FILTER_PRODUCTS = "products/filter";
const LOAD = "products/load";
const LOAD_PRODUCTS_SUCCESS = "products/loadSuccess";
const LOAD_PRODUCTS_FAILURE = "products/loadFailed";

// Product
const LOAD_PRODUCT = "product/loading";
const LOAD_PRODUCT_SUCCESS = "product/loadSuccess";
const LOAD_PRODUCT_FAILURE = "product/loadFailed";

// Action Creators Products
export function LoadProducts(page) {
  return dispatch => {
    dispatch({ type: LOAD });
    getAllProducts(page)
      .then(products => dispatch(LoadProductsSucceded(products)))
      .catch(err => dispatch(LoadProductsFailed(err.message)));
  };
}

function LoadProductsSucceded(products) {
  return { type: LOAD_PRODUCTS_SUCCESS, payload: products };
}

function LoadProductsFailed(err) {
  return { type: LOAD_PRODUCTS_FAILURE, payload: err };
}

export function filterByColor(color) {
  return { type: FILTER_PRODUCTS, payload: color };
}

// Action Creators Product
export function LoadProduct(id) {
  return dispatch => {
    dispatch({ type: LOAD_PRODUCT });
    getProduct(id)
      .then(product => dispatch(LoadProductSucceded(product)))
      .catch(err => dispatch(LoadProductFailed(err.message)));
  };
}

function LoadProductSucceded(product) {
  return { type: LOAD_PRODUCT_SUCCESS, payload: product };
}

function LoadProductFailed(err) {
  return { type: LOAD_PRODUCT_FAILURE, payload: err };
}

// API Calls Products
export function getAllProducts(page) {
  return axios.get(getPageAPI(page)).then(res => res.data);
}

// API Calls Product
export function getProduct(id) {
  return axios.get(getByIdAPI(id)).then(res => res.data);
}

// Reducer
export function productReducer(
  state = { products: [], err: null, loading: false, product: {} },
  action = {}
) {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return (state = {
        ...state,
        products: state.products.filter(
          product => product.color === action.payload
        )
      });
    case LOAD:
      return (state = {
        ...state,
        loading: true
      });

    case LOAD_PRODUCTS_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        products: action.payload.data
      });

    case LOAD_PRODUCTS_FAILURE:
      return (state = {
        ...state,
        loading: false,
        err: action.payload
      });

    case LOAD_PRODUCT:
      return (state = {
        ...state,
        loading: true
      });

    case LOAD_PRODUCT_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        product: action.payload.data
      });

    case LOAD_PRODUCT_FAILURE:
      return (state = {
        ...state,
        loading: false,
        err: action.payload
      });

    default:
      return state;
  }
}

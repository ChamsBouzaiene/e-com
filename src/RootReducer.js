import { combineReducers } from "redux";
import { productReducer } from "./features/products/products";
import { cartReducer } from "./features/cart/cart";

export default combineReducers({
  products: productReducer,
  cart: cartReducer
});

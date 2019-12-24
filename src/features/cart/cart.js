// Following the redux style Guide Duck Pattern
import {
  initLocalStorage,
  getItems,
  deleteItem,
  setItem
} from "../../common/utils/localStorage";

// Types
// items

initLocalStorage();

const ADD_TO_CART = "cart/items/add";
const REMOVE_FROM_CART = "cart/items/delete";

export function addToCart(product) {
  setItem(product);
  return { type: ADD_TO_CART, payload: product };
}

export function removeFromCart(id) {
  deleteItem(id);
  return { type: REMOVE_FROM_CART, payload: id };
}

function doesExistInCart(product, state) {
  let doesExist = state.items.filter(el => el.id === product.id);
  return doesExist.length;
}

function addItem(product, state) {
  if (doesExistInCart(product, state)) {
    return state.items.map(el => {
      if (el.id === product.id) {
        el.qte += product.qte;
        return el;
      }
      return el;
    });
  }
  return [...state.items, product];
}

// Reducer
export function cartReducer(state = { items: getItems() }, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return (state = {
        ...state,
        items: addItem(action.payload, state)
      });
    case REMOVE_FROM_CART:
      return (state = {
        ...state,
        items: state.items.filter(el => el.id !== action.payload)
      });
    default:
      return state;
  }
}

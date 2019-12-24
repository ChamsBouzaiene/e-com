var ls = require("local-storage");

export function initLocalStorage() {
  if (getItems() === null) {
    ls.set("items", JSON.stringify([]));
  }
}

export function getItems() {
  return JSON.parse(ls.get("items"));
}

export function deleteItem(id) {
  let items = getItems();
  let newItems = items.filter(el => el.id !== id);
  ls.set("items", JSON.stringify(newItems));
}

// [TODO] If Item do Exist incriment qte
export function setItem(item) {
  let items = getItems();
  let newItems = addItem(item, items);
  ls.set("items", JSON.stringify(newItems));
}

function doesExistInCart(item, items) {
  let doesExist = items.filter(el => el.id === item.id);
  return doesExist.length;
}

function addItem(item, items) {
  if (doesExistInCart(item, items)) {
    return items.map(el => {
      if (el.id === item.id) {
        el.qte += item.qte;
        return el;
      }
      return el;
    });
  }
  return [...items, item];
}

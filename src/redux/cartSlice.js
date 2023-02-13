import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  benefit: 0,
  checkout: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const benefit = items.reduce(
    (total, product) =>
      total + (product.discount&&product.discount - product.price) * product.quantity,
    0
  );
  return { itemsCounter, total, benefit };
};

const addItem = (state, action) => {
  const existingItem = state.selectedItems.find(
    (item) => item.id === action.payload.id
  );
  if (!existingItem) {
    state.selectedItems.push({
      ...action.payload,
      quantity: 1,
    });
  }
  state.selectedItems = [...state.selectedItems];
  let { itemsCounter, total, benefit } = sumItems(state.selectedItems);
  state.itemsCounter = itemsCounter;
  state.total = total;
  state.benefit = benefit;
  state.checkout = false;
};
const removeItem = (state, action) => {
  const newSelectedItems = state.selectedItems.filter(
    (item) => item.id !== action.payload.id
  );

  state.selectedItems = [...newSelectedItems];
  let { itemsCounter, total, benefit } = sumItems(state.selectedItems);
  state.itemsCounter = itemsCounter;
  state.total = total;
  state.benefit = benefit;
};
const increaseItem = (state, action) => {
  const indexI = state.selectedItems.findIndex(
    (item) => item.id === action.payload.id
  );
  state.selectedItems[indexI].quantity++;
  let { itemsCounter, total, benefit } = sumItems(state.selectedItems);
  state.itemsCounter = itemsCounter;
  state.total = total;
  state.benefit = benefit;
};
const decreaseItem = (state, action) => {
  const indexD = state.selectedItems.findIndex(
    (item) => item.id === action.payload.id
  );
  state.selectedItems[indexD].quantity--;
  let { itemsCounter, total, benefit } = sumItems(state.selectedItems);
  state.itemsCounter = itemsCounter;
  state.total = total;
  state.benefit = benefit;
};
const checkoutItem = (state) => {
  state.selectedItems = [];
  state.itemsCounter = 0;
  state.total = 0;
  state.checkout = true;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
    checkoutItem,
  },
});

export const {
  addItem: addAction,
  removeItem: removeAction,
  increaseItem: increaseAction,
  decreaseItem: decreaseAction,
  checkoutItem: checkoutAction,
  clearItem: clearAction,
} = cartSlice.actions;

export default cartSlice.reducer;

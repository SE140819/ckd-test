import { createSlice } from "@reduxjs/toolkit";
import { Toast } from 'flowbite-react';
import { HiFire } from 'react-icons/hi';

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  
  reducers: {
    // =========== add item ============
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount += newItem.giamoi;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          tenkhongdauvi: newItem.tenkhongdauvi,
          photo: newItem.photo,
          link: newItem.link,
          gia: newItem.gia,
          giamoi: newItem.giamoi,
          moi: newItem.moi,
          khuyenmai: newItem.khuyenmai,
          nhaplieu_daban: newItem.nhaplieu_daban,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      setItemFunc(state.cartItems, state.totalAmount, state.totalQuantity);
      // dùng Toast để hiển thị thông báo
    },

   

    // ========= remove item ========

    removeItem(state, action) {
      
    },

    //============ delete item ===========

    deleteItem(state, action) {
  
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

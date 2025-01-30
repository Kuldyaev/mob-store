import { createSlice } from "@reduxjs/toolkit";
import { mock_goods } from "@/shared/mocks/mock_cart";
import { CartState } from "@/shared/types/store/cart";

const initialState: CartState = {
  goods: mock_goods,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AddressState } from "@/shared/types/store/address";

const initialState: AddressState = {
  address: [
    {
      id: 0,
      type: "point",
      checked: true,
    },
    {
      id: 1,
      type: "courier",
      checked: false,
    },
  ],
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    changeDeliveryAddress: (
      state: AddressState,
      action: PayloadAction<number>
    ) => {
      state.address.map((item) => {
        item.checked = item.id === action.payload;
      });
    },
  },
});

export const { changeDeliveryAddress } = addressSlice.actions;

export default addressSlice.reducer;

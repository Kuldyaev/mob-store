import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StatusState } from "@/shared/types/store/status";

const initialState: StatusState = {
  activeRoute: "/",
  headerFixed: {
    isShowed: false,
  },
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setActiveRoute: (state: StatusState, action: PayloadAction<string>) => {
      state.activeRoute = action.payload;
    },
    setHeaderFixedShowed: (
      state: StatusState,
      action: PayloadAction<boolean>
    ) => {
      state.headerFixed.isShowed = action.payload;
    },
  },
});

export const { setActiveRoute, setHeaderFixedShowed } = statusSlice.actions;

export default statusSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { StatusState } from "@/shared/types/store/status";

const initialState: StatusState = {
  isAuthorized: false,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
});

export const {} = statusSlice.actions;

export default statusSlice.reducer;

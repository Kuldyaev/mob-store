import { createSlice } from "@reduxjs/toolkit";
import { mock_catalog } from "@/shared/mocks/mock_catalog";
import { CatalogState } from "@/shared/types/store/catalog";

const initialState: CatalogState = {
  data: mock_catalog,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
});

export const {} = catalogSlice.actions;

export default catalogSlice.reducer;

import { combineReducers } from "redux";

import status from "./slices/status";
import catalog from "./slices/catalog";
import cart from "./slices/cart";

const reducer = combineReducers({
  status,
  catalog,
  cart,
});

export default reducer;

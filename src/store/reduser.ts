import { combineReducers } from "redux";

import status from "./slices/status";
import catalog from "./slices/catalog";
import cart from "./slices/cart";
import address from "./slices/address";

const reducer = combineReducers({
  status,
  catalog,
  cart,
  address,
});

export default reducer;

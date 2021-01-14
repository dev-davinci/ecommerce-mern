import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productListReducer, productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  loginReducer,
  registerReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducer";
import { orderCreateReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
});

const middleware = [thunk];

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initState = {
  cart: { cartItems: [] },
};

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

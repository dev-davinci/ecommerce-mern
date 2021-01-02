import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productListReducer, productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productReducer,
});

const middleware = [thunk];

const initState = {};

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

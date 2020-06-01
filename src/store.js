import { createStore, combineReducers } from "redux";
import userReducer from "./redux/userReducer";
import productsReducer from "./redux/productsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

export default createStore(rootReducer);

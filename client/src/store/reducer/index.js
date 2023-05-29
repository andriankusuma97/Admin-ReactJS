import { combineReducers } from "redux";
import productReducer from "./product";
import userReducer from "./user";


export const rootReducer = combineReducers({
  productReducer,
  userReducer
})

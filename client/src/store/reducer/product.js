import {  FETCH_PRODUCT } from "../action/actionType";

const initialState ={
  product:[],
  loading: true
};
const productReducer = (state = initialState, action)=>{
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
        
      };
    default:
      return state
  }
}
export default productReducer;
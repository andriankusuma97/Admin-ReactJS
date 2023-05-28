import {  FETCH_PRODUCT,FETCH_DETAIL_PRODUCT } from "../action/actionType";

const initialState ={
  product:[],
  loading: true
};
const productReducer = (state = initialState, action)=>{
  console.log(action)
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
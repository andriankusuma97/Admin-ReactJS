import { FETCH_USER } from "../action/actionType";

const initialState ={
  users:[],
  loading: true
};
const userReducer = (state = initialState, action)=>{
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
        
      };
    default:
      return state
  }
}
export default userReducer;
import { BASE_URL, FETCH_PRODUCT,FETCH_DETAIL_PRODUCT } from "./actionType";

export function  fetchProductSucces (payload) {
  return {
    type: FETCH_PRODUCT,
    payload,
  }
}
export function  fetchDetailProductSucces (payload) {
  return {
    type: FETCH_DETAIL_PRODUCT,
    payload,
  }
}


export function fetchDataProduct() {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/products",{
        
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      // setNews(data);
      // console.log(data, "<<<<<<dari client side");
      dispatch(fetchProductSucces(data.products.slice(0,10)))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function fetchDetailProduct(id) {

  return async (dispatch,getState)=>{

    try {
      const response = await fetch(BASE_URL + "/customer/post/"+id);
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      // setNews(data);
      console.log(data, "<<<<<<dari client side");
      dispatch(fetchDetailProductSucces(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}
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
      console.log(data, "<<<<<<dari client side");
      dispatch(fetchProductSucces(data.reverse()))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function addProduct(product) {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/products",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      // setNews(data);
      console.log(data, "<<<<<<add New POst");
      // dispatch(fetchProductSucces(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}
export function editeProduct(product,id) {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/products/"+id,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      // setNews(data);
      console.log(data, "<<<<<<edite Product");
      // dispatch(fetchProductSucces(data))
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }
}

export function deleteProduct(id) {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/products/"+id,{
        method: 'DELETE',
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      // setNews(data);
      console.log(data, "<<<<<<delete success");
      // dispatch(fetchProductSucces(data))
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
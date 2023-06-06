import { BASE_URL, FETCH_PRODUCT,FETCH_DETAIL_PRODUCT } from "./actionType";
import Swal from 'sweetalert2'


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
      dispatch(fetchProductSucces(data.reverse()))
    } catch (error) {
      console.log(error);
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

      if (response.ok) {
        Swal.fire(
          'Success!',
          'Add New Product Success ',
          'success'
        )
      }
     
    } catch (error) {
      console.log(error);
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
      if (response.ok) {
        Swal.fire(
          'Success!',
          'Update Product Success ',
          'success'
        )
      }
    } catch (error) {
      console.log(error);
    } 
  }
}

export function deleteProduct(id) {

  return async (dispatch,getState)=>{
    try {
      await Swal.fire({
        title: 'Are you sure?',
        text: "You want to Delete Product?",
        icon: 'question',
        confirmButtonText: 'Yes!',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        reverseButtons:true
      }).then(async (result) => {
        if(result.isConfirmed){
          const response = await fetch(BASE_URL + "/products/"+id,{
            method: 'DELETE',
          }
          );
          if (!response.ok) {
            throw await response.text();
          }
          const data = await response.json();
          Swal.fire(
            'Success!',
            'Delete Product Success ',
            'success'
          )
        }
      })
     
    } catch (error) {
      console.log(error);
    } 
  }
}


import { BASE_URL, FETCH_USER } from "./actionType";
import Swal from 'sweetalert2'


export function  fetchUserSucces (payload) {
  return {
    type: FETCH_USER,
    payload,
  }
}


export function fetchDataUser() {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/users",{
        
      }
      );
      if (!response.ok) {
        throw await response.text();
      }
      const data = await response.json();
      dispatch(fetchUserSucces(data.reverse()))
    } catch (error) {
      console.log(error);
    } 
  }
}

export function addUser(product) {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/users",{
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
export function editeUser(user,id) {

  return async (dispatch,getState)=>{
    try {
      const response = await fetch(BASE_URL + "/users/"+id,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
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

export function deleteUser(id) {

  return async (dispatch,getState)=>{
    try {
      await Swal.fire({
        title: 'Are you sure?',
        text: "You want to Delete user?",
        icon: 'question',
        confirmButtonText: 'Yes!',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        reverseButtons:true
      }).then(async (result) => {
        if(result.isConfirmed){
          const response = await fetch(BASE_URL + "/users/"+id,{
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



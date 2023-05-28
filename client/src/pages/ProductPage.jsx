import React from 'react'
import RowProduct from '../components/RowProduct'
import {
  Button,
  Container,
  Row,
  Col,
  Nav,
  Stack,
  Dropdown,
  Form,
  Table,
  Modal
} from "react-bootstrap";
import { RiDashboardLine } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { fetchDataProduct } from '../store/action/actionCreator';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAdd from '../components/FormAdd';
import ModalAdd from '../components/ModalAdd';



export default function ProductPage() {
  const {product} = useSelector((state)=>{
    return state.productReducer
  })

  const dispatch = useDispatch()
  // console.log(product,"<<<< dari page")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleAddProduct = (e)=>{
    e.preventDefault()
    console.log("masukk sini")
    setShow(true)
  }

  useEffect(()=>{
    dispatch(fetchDataProduct())
    handleClose()
  },[])

  return (
    <div className='mb-5'>
      <div className='w-full d-flex justify-content-end  mb-2 '>
         <Button onClick={handleAddProduct} className='' variant="primary"> + Add New Product</Button>
      </div>
       
    <Table bordered hover size="sm" className="w-100  align-items-center justify-center" style={{ fontFamily: "Poppins" }}  >
    <thead >
      <tr className="text-center bg-dark text-white py-3  px-3">
        <th className='px-2'>#</th>
        <th className='px-2'>Title</th>
        <th className='px-2'>Description</th>
        <th className='px-3'>Stock</th>
        <th className='px-3 '>
         price
          </th>
        <th className='px-3 '>
         Actions
          </th>
      </tr>
    </thead>
    <tbody className=''>
      {
        product.map((data,idx)=>(
          <RowProduct data={data} idx={idx} key={data.id} />
        ))
      }
     
    </tbody>
  </Table>
  <ModalAdd show={show} onHide={handleClose}/>
        
  </div>
  )
}

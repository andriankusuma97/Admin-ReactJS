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
} from "react-bootstrap";
import { RiDashboardLine } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { fetchDataProduct } from '../store/action/actionCreator';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function ProductPage() {
  const {product} = useSelector((state)=>{
    return state.productReducer
  })
  const dispatch = useDispatch()
  // console.log(product,"<<<< dari page")
  useEffect(()=>{
    dispatch(fetchDataProduct())
  },[])

  return (
    <Table striped bordered hover size="sm" className="w-100 table-striped align-items-center justify-center" style={{ fontFamily: "Poppins" }}  >
    <thead >
      <tr className="text-center  px-3">
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
  )
}

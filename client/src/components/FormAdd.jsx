import React from 'react'
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
import { useNavigate } from "react-router-dom";
import ProductPage from '../pages/ProductPage';
import { addProduct } from '../store/action/actionCreator';


export default function FormAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const[product,setProduct]=useState({
    title: "",
    description:"",
    price:"",
    stock:"",
  })

  function handleChange(e){
    const{value,name}= e.target
    setProduct({
      ...product, 
      [name] : value
    })
  }

  const handleSubmit= async(e)=>{
    e.preventDefault()
    console.log("submit add")
    console.log(product)
    const close = false
    await dispatch(addProduct(product))
    // navigate("/product")
  }

  return (
    <Form onSubmit={handleSubmit} >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>title</Form.Label>
      <Form.Control
        name="title"
        type="text"
        placeholder="Title..."
        autoFocus
        value={product.title} 
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Price</Form.Label>
      <Form.Control
      name="price"
        type="number"
        placeholder="Price...."
        autoFocus
        value={product.price} 
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Stock</Form.Label>
      <Form.Control
      name="stock"
        type="number"
        placeholder="Stock..."
        autoFocus
        value={product.stock} 
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={3}
      name="description" 
      placeholder="Description..."
       value={product.description} 
       onChange={handleChange}
      />
    </Form.Group>
    <Button type="submit" variant="primary" >
           Submit
          </Button>
  </Form>
  )
}

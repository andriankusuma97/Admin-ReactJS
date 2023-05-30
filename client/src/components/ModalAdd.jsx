import React from "react";
import {
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import {
  editeProduct,
  addProduct,
  fetchDataProduct,
} from "../store/action/actionCreator";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ModalAdd({ dataProduct = "", show, onHide }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

  const [product, setProduct] = useState({
    title: dataProduct.title,
    description: dataProduct.description,
    price: dataProduct.price,
    stock: dataProduct.stock,
    images: dataProduct.images,
  });

   

  function handleChange(e) {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const close = false;
    if (dataProduct === "") {
      await dispatch(addProduct(product));
      dispatch(fetchDataProduct());
      setProduct({
        title: "",
        description: "",
        price: "",
        stock: "",
        images: "",
      });
    } else {
      await dispatch(editeProduct(product, dataProduct.id));
      dispatch(fetchDataProduct());
    }
  };

  const handleRequired = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields.",
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {dataProduct ? "Edite Product" : "Add New Product"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>image Link</Form.Label>
            <Form.Control
              name="images"
              type="text"
              placeholder="Image Link..."
              autoFocus
              value={product.images}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Description..."
              value={product.description}
              onChange={handleChange}
            />
          </Form.Group>{" "}
          {product.title &&
          product.price &&
          product.stock &&
          product.images &&
          product.description ? (
            <Button type="submit" variant="primary" onClick={onHide}>
              Submit
            </Button>
          ) : (
            <Button type="submit" variant="primary" onClick={handleRequired}>
              Submit
            </Button>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addUser, editeUser, fetchDataUser } from "../store/action/actionUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InputMask from 'react-input-mask';


export default function ModalAddAccount({ dataAccount = "", show, onHide }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Account, setAccount] = useState({
    firstName: dataAccount.firstName,
    lastName: dataAccount.lastName,
    email: dataAccount.email,
    phone: dataAccount.phone,
    password: dataAccount.password,
  });

  // const [lastName, setLastName] = useState('');

  // const handleLastNameChange = (event) => {
  //   const input = event.target.value;
  //   const maskedInput = maskLastName(input);
  //   setLastName(maskedInput);
  // };

  // const maskLastName = (input) => {
  //   const maskedValue = input.replace(/./g, '*');
  //   return maskedValue;
  // };

  // masked lastname
  // const maskedLastName = Account.lastName?.replace(/./g, '*');
  // console.log(lastName,"<<< ini lastname")
  function handleChange(e) {
    const { value, name } = e.target;
    setAccount({
      ...Account,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dataAccount === "") {
      await dispatch(addUser(Account));
      dispatch(fetchDataUser());
      setAccount({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      });
    } else {
      await dispatch(editeUser(Account, dataAccount.id));
      dispatch(fetchDataUser());
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
          {dataAccount ? "Edite Account" : "Add New Account"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First Name..."
              autoFocus
              value={Account.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type={dataAccount ? "text":"password"}
              placeholder="lastName...."
              autoFocus
              value={Account.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="email..."
              autoFocus
              value={Account.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <div>
            <Form.Label>Phone Number</Form.Label>

            </div>
            <InputMask
            className="formInput"
              mask='(+99) 999 999 9999'
              name="phone"
              type="text"
              placeholder="Phone Number..."
              autoFocus
              value={Account.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password..."
              autoFocus
              value={Account.password}
              onChange={handleChange}
            />
          </Form.Group>
          {Account.firstName &&
          Account.lastName &&
          Account.email &&
          Account.phone ? (
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

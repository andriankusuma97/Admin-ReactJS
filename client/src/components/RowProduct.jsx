import React from "react";
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
  Alert,
} from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { deleteProduct, fetchDataProduct } from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalAdd from "./ModalAdd";

export default function RowProduct({ data, idx }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleEditeProduct = async(e) => {
    try {
      e.preventDefault();
      console.log("masukk sini");
      await dispatch(fetchDataProduct())
      setShow(true);
    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      console.log("masuk sini ");
      await dispatch(deleteProduct(data.id));
      navigate("/product");
      dispatch(fetchDataProduct())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr className=" py-3">
        <td className="text-center py-4">{idx + 1}</td>
        <td className="px-3  py-4 ">{data?.title}</td>
        <td className="align-self-center">{data?.description}</td>
        <td className="text-center py-4">{data?.stock}</td>
        <td className="text-center align-self-center py-4"> $ {data?.price}</td>
        <td className="text-center align-self-center py-4 ">
          <a href="" onClick={handleEditeProduct}>
            <BiPencil className="text-success" />
          </a>
          <a href="" onClick={handleDelete}>
            <RiDeleteBin6Line className="ms-3 text-danger" />
          </a>
        </td>
      </tr>
      <ModalAdd dataProduct={data} show={show} onHide={handleClose} />
    </>
  );
}

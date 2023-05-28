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
} from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";

export default function RowProduct({data,idx}) {
  return (
    <tr className=" py-3" >
      <td className="text-center py-4" >{idx+1}</td>
      <td className="px-3  py-4 " >{data?.title}</td>
      <td className="align-self-center">{data?.description}</td>
      <td className="text-center py-4">{data?.stock}</td>
      <td className="text-center align-self-center py-4"> $ {data?.price}</td>
      <td className="text-center align-self-center py-4 "> 
      <BiPencil/>
      <RiDeleteBin6Line className="ms-3"/>
      </td>
    </tr>
  );
}

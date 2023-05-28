import React from "react";
import { Link } from "react-router-dom";
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

export default function Sidebar() {
  return (
    <Col
      md={2}
      className="sticky-top vh-100  justify-content-center align-items-center bg-white "
      style={{ fontFamily: "Poppins" }}
    >
      <div className="h2 text-center my-3" style={{ fontFamily: "Poppins" }}>
        Admin
      </div>
      <ul className="list-group">
        <Link className="text-decoration-none text-dark" to={"/"}>
          <li className="list-group-item mt-2">
            <RiDashboardLine /> Dashboard
          </li>
        </Link>

        <Link className="text-decoration-none text-dark" to={"/product"}>
          <li className="list-group-item mt-2">Product</li>
        </Link>
        <Link className="text-decoration-none text-dark" to={"/profile"}>
          <li className="list-group-item mt-2">Acount</li>
        </Link>
      </ul>
    </Col>
  );
}

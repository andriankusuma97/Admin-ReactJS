import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { RiDashboardLine } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { FcComboChart, FcMindMap } from "react-icons/fc";
import { MdSwitchAccount } from "react-icons/md";

export default function Sidebar() {
  return (
    <Col
      md={2}
      className="sticky-top vh-100  justify-content-center align-items-center bg-white "
      style={{ fontFamily: "Poppins" }}
    >
      <div className="h1 text-center  my-4" style={{ fontFamily: "Poppins" }}>
        <FcMindMap /> Admin
      </div>
      <ul className="list-group mt-4">
        <Link className="text-decoration-none text-dark " to={"/"}>
          <li className="list-group-item mt-2 hover">
            <RiDashboardLine className="text-success" /> Dashboard
          </li>
        </Link>

        <Link className="text-decoration-none text-dark" to={"/product"}>
          <li className="list-group-item mt-2 hover">
            {" "}
            <FcComboChart /> Product
          </li>
        </Link>
        <Link className="text-decoration-none text-dark" to={"/account"}>
          <li className="list-group-item mt-2 hover">
            {" "}
            <MdSwitchAccount className="text-danger" /> Account
          </li>
        </Link>
      </ul>
    </Col>
  );
}

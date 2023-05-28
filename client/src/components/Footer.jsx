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
import { RiDashboardLine } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";

export default function Footer() {
  return (
    <Row className="p-2 mb-0 py-3 bg-white border border-1">
      <footer className="py-1 my-1 bg-white">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2023 Company, Inc</p>
      </footer>
    </Row>
  );
}

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
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
import Header from "./Header";

export default function Layout() {
  return (
    <div className="container-fluid vh-100 bg-light">
      <Row className="bg-white">
        <Sidebar />

        <Col sm={10} className="bg-light border border-1">
            <Header />
          <Row className=" justify-content-center  p-2 px-5 h-75 bg-light ">
            <Outlet />
          </Row>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

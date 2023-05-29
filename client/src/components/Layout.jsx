import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
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

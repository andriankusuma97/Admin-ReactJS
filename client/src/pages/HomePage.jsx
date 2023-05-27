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

function HomePage() {
  return (
    <div className="container-fluid vh-100 bg-light">
      <Row className="bg-white">
        <Col
          md={2}
          className="sticky-top vh-100  justify-content-center align-items-center bg-white "
        >
          <div
            className="h2 text-center my-3"
            style={{ fontFamily: "Poppins" }}
          >
            Admin
          </div>
          <ul className="list-group">
            <li className="list-group-item mt-2">
              {" "}
              <RiDashboardLine /> Dashboard
            </li>
            <li className="list-group-item mt-2">Form</li>
            <li className="list-group-item mt-2">Page</li>
            <li className="list-group-item mt-2">Acount</li>
          </ul>
        </Col>

        <Col sm={10} className="bg-light border border-1">
          <Row
            className=" py-1 bg-light px-5 my-3"
            style={{ fontFamily: "Poppins" }}
          >
            <Stack
              className="border rounded bg-white "
              direction="horizontal"
              gap={3}
            >
              <div className="ms-3">
                <Form className="d-flex  ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
              <div className="ms-auto">Admin Name</div>

              <Dropdown>
                <Dropdown.Toggle
                  className="bg-white border-white "
                  id="dropdown-basic"
                >
                  <img
                    className=" border rounded-circle "
                    src="https://www.pngmart.com/files/22/User-Avatar-Profile-Transparent-Background.png"
                    alt=""
                    width={"50px"}
                    height={"50px"}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
                  <Dropdown.Item className="border-top mt-3" href="#/action-3"><CgLogOut className="fs-5"/> Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Stack>
          </Row>

          <Row className=" justify-content-center  p-2 px-5 h-75 bg-light ">
            <Table striped bordered hover size="sm" className="w-100">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Row>

          <Row className="p-2 py-3 bg-light border border-2">
            <footer className="py-1 my-1">
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
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;

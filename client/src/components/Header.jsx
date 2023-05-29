import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Stack, Dropdown, Form } from "react-bootstrap";
import { CgLogOut } from "react-icons/cg";

export default function Header() {
  return (
    <Row className=" py-1 bg-light px-5 my-3" style={{ fontFamily: "Poppins" }}>
      <Stack
        className="border rounded bg-white py-2 "
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
            <Link to={"/login"}>
              <Dropdown.Item className="border-top mt-3" href="#/action-3">
                <CgLogOut className="fs-5" /> Log Out
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
    </Row>
  );
}

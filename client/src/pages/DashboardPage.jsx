import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { fetchDataProduct } from "../store/action/actionCreator";
import { fetchDataUser } from "../store/action/actionUser";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardPage() {
  const { product } = useSelector((state) => {
    return state.productReducer;
  });
  const { users } = useSelector((state) => {
    return state.userReducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataProduct());
    dispatch(fetchDataUser());
  }, []);

  return (
    <div
      className="row justify-content-center text-center gap-4 "
      style={{ fontFamily: "Poppins" }}
    >
      <Card
        bg="primary"
        key="Primary"
        text={"primary" === "light" ? "dark" : "white"}
        style={{ width: "18rem", height: "15rem" }}
        className=" gap-2"
      >
        <Card.Header> Total Products</Card.Header>
        <Card.Body>
          <Card.Text style={{ fontSize: "100px" }}>{product.length}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="success"
        key="Success"
        text={"success" === "light" ? "dark" : "white"}
        style={{ width: "18rem", height: "15rem" }}
        className=" gap-2"
      >
        <Card.Header>Total Users</Card.Header>
        <Card.Body>
          <Card.Text style={{ fontSize: "100px" }}>{users.length}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

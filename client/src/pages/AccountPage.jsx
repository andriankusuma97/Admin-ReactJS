import React from "react";
import { Button, Table } from "react-bootstrap";
import { fetchDataUser } from "../store/action/actionUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RowUser from "../components/RowUser";
import ModalAddAccount from "../components/ModalAccount";

export default function AccountPage() {
  const { users } = useSelector((state) => {
    return state.userReducer;
  });

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setShow(true);
  };

  useEffect(() => {
    dispatch(fetchDataUser());
    handleClose();
  }, []);

  return (
    <div className="mb-5">
      <div className="w-full d-flex justify-content-end  mb-2 ">
        <Button onClick={handleAddProduct} className="" variant="primary">
          {" "}
          + Add New Account
        </Button>
      </div>

      <Table
        bordered
        hover
        size="sm"
        className="w-100  align-items-center justify-center"
        style={{ fontFamily: "Poppins" }}
      >
        <thead>
          <tr className="text-center bg-dark text-white py-3  px-3">
            <th className="px-2">#</th>
            <th className="px-2">First Name</th>
            <th className="px-2">Last Name</th>
            <th className="px-3">Email</th>
            <th className="px-3 ">Phone Number</th>
            <th className="px-3 ">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((data, idx) => (
            <RowUser data={data} idx={idx} key={data.id} />
          ))}
        </tbody>
      </Table>
      <ModalAddAccount show={show} onHide={handleClose} />
    </div>
  );
}

import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDataUser,deleteUser } from "../store/action/actionUser";
import ModalAddAccount from '../components/ModalAccount';
import { BsEyeSlash } from "react-icons/bs";



export default function RowUser({ data, idx }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showPassword, setShowPassword] = useState(false);

  // Membuat masking dengan bintang
  const maskedPassword = data.password?.replace(/./g, '*');


  const handleEditeUser = async(e) => {
    try {
      e.preventDefault();
      await dispatch(fetchDataUser())
      setShow(true);
    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await dispatch(deleteUser(data.id));
      navigate("/account");
      dispatch(fetchDataUser())
    } catch (error) {
      console.log(error);
    }
  };
  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(true);
  };
  const toggleHidePassword = (e) => {
    e.preventDefault();
    setShowPassword(false);
  };

  return (
    <>
      <tr className=" ">
        <td className="text-center ">{idx + 1}</td>
        <td className="px-3    ">{data?.firstName}</td>
        <td className="px-3 ">{data?.lastName}</td>
        <td className="text-center ">{data?.email}</td>
        <td className="text-center align-self-center "> {data?.phone}</td>
        <td className="text-center align-self-center "> {showPassword? data.password :maskedPassword} 

        <a href="" className="text-decoration-none ms-3" onClick={ showPassword ? toggleHidePassword : toggleShowPassword }>
          <BsEyeSlash className="text-dark"/>

        </a>
        
        </td>
        <td className="text-center align-self-center  ">
          <a href="" onClick={handleEditeUser}>
            <BiPencil className="text-success" />
          </a>
          <a href="" onClick={handleDelete}>
            <RiDeleteBin6Line className="ms-3 text-danger" />
          </a>
        </td>
      </tr>
      <ModalAddAccount dataAccount={data}  show={show} onHide={handleClose}/>
    </>
  );
}

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../header/Header.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
     let data = useSelector((store) => store);
     let arr = [...data.reducx_products];
     let soluong = arr.length;
    // const datas = useSelector((store) => store);
    const navigate = useNavigate();
    const handlCLick = () => {
    navigate("/Cart")
  }
  return (
    <>
      <div className="header">
        <div>
          <h2>AYE</h2>
        </div>
        <div>
          <input type="text" />
          <AiOutlineSearch className="icon" />
        </div>
        <div>
          <p>{soluong}</p>
          <AiOutlineShoppingCart className="icon" onClick={handlCLick} />
        </div>
      </div>
    </>
  );
}

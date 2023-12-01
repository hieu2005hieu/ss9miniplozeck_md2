import React, { useState } from 'react'
import '../cart/Cart.scss'
import { useDispatch, useSelector } from 'react-redux';
export default function Cart() {

  let data = useSelector((store) => store);
  let uchdispath=useDispatch()
  let arr = [...data.reducx_products];

  const hanldtang = (id) => {
    uchdispath({
      type: "TANG",
      payload:id
    })
  }
   const hanldgiam = (id) => {
     uchdispath({
       type: "GIAM",
       payload: id,
     });
  };
  const hanldxoa = (id) => {
    alert("Bạn có muốn xóa không?");
    uchdispath ({
      type: "DELETE",
      payload: id,
    });
  };
  
  return (
    <>
      <h2>Cart Product</h2>
      <table border={1} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>id</th>
            <th>Ten sp</th>
            <th>Gia</th>
            <th>anh</th>
            <th>So luong</th>
            <th>Tong tien</th>
          </tr>
        </thead>

        {arr.map((item) => (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.img} alt="" />
              </td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => hanldtang(item.id)}>+</button>
                <span>{item.quantity}</span>{" "}
                <button onClick={() => hanldgiam(item.id)}>-</button>
                <button onClick={() => hanldxoa(item.id)}>xoa</button>
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          </tbody>
        ))}

        <tfoot>
          <tr>
            <td>Tong Tien</td>
            <td colSpan={5}></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

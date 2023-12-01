import React, { useEffect, useState } from "react";
import "../products/Products.scss";
import { useDispatch, useSelector} from "react-redux";
import ReactLoading from "react-loading";
export default function Products() {

    const usepath = useDispatch()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data]);
      });
  }, []);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 1000);
  }, []);
  const hanlclick = (item) => {
    usepath({
      type: "ADD",
      payload: item,
    })
  };
  
  return (
      <>
        {status ? <div className="products">
        {products.map((item) => (
          <div key={item.id} className="title">
            <img src={item.img} alt="" />
            <div>
              <p>Tên Sản Phẩm: {item.name}</p>
              <p>Giá:{item.price}</p>
                </div>
            <button onClick={() => hanlclick(item)}>+</button>
          </div>
        ))}
      </div> : <ReactLoading type={"spin"} color={"red"} height={'15%'} width={'15%'} />}
    
      
         
    </>
  );
}

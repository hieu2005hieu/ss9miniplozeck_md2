import React from 'react'
import {Route,Routes} from "react-router-dom"
import Header from './compuden/header/header'
import Cart from './compuden/cart/Cart';
import Home from './compuden/home/Home';
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Header" element={<Header></Header>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
}

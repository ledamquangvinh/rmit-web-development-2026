import type React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

const Pages : React.FC = () => {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route index element={ <Home></Home>}></Route>
          <Route path="products/*" element={ <Product></Product>}></Route>
          <Route path="about" element={ <Home></Home>}></Route>
          <Route path="contact" element={ <Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default Pages;
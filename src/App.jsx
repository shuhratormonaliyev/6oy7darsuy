import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Products from "./components/Product";
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div>
      <header>
        <div className="align-element flex justify-center sm:justify-end">
          <div className="align-element flex justify-center gap-x-6 items-center">
            <div className="flex gap-x-6 justify-center items-center mr-64">
              <a className="link link-hover text-xs sm:text-sm" href="./Login">
                Sign in / Guest
              </a>
              <a
                className="link link-hover text-xs sm:text-sm"
                href="./register"
              >
                Create-account
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-[1000px] m-auto justify-between">
          <button className="btn btn-info font-bold text-xl text-white mb-2 w-11 h-1">C</button>
          <nav className="flex gap-3 pt-3 navbar-center lg:flex">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <div className="flex gap-3 pt-3">
            <i className="fa fa-moon-o cursor-pointer" aria-hidden="true"></i>
            <i className="fa fa-shopping-cart cursor-pointer"></i>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;

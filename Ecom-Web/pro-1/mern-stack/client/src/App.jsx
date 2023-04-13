import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import CartPage from './pages/CartPage';
import WishlistPage from "./pages/WishlistPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ComparePage from "./pages/ComparePage";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/carts' element={<CartPage />} />
        <Route path='/wishlists' element={<WishlistPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/product/compare' element={<ComparePage />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;

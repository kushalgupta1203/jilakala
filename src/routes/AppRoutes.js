import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home";
import Login from '../pages/login/Login';
import Product from '../pages/product/Product';

export default function AppRoutes() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
        </Routes>
  );
}
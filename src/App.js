import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter } from 'react-router-dom';
import ProductList from "./components/ProductList";
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <ProductList/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

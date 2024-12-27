import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./components/AddProducts";
import ProtectedRoute from "./components/AddProducts";

function App() {
  const [isAuthorized, setAuthorized] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setAuthorized={setAuthorized} />} />
        <Route
          path="/add-product"
          element={
            <ProtectedRoute isAuthorized={isAuthorized}>
              <AddProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

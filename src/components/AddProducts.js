/*import React, { useState } from "react";
import { db } from "../Firebase"; // Configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth"; // Hook personalizado para manejar la autenticación

const AddProduct = () => {
  const [product, setProduct] = useState({ name: "", price: "", description: "" });
  const { user } = useAuth();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), product);
      alert("Producto agregado con éxito");
      setProduct({ name: "", price: "", description: "" });
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  // Verifica si el usuario es admin
  if (user?.role !== "admin") {
    return <p>No tienes permiso para acceder a esta página.</p>;
  }

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Nombre del producto"
          required
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Precio"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Descripción"
          required
        />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProduct;*/

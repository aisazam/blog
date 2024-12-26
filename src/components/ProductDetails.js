import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: 'Afilador de Cuchillos',
      image: 'https://m.media-amazon.com/images/I/51bo2PL8c2L._AC_SL1024_.jpg',
      description:
        'El diseño probado afila cuchillos y hojas dentadas de forma rápida y sencilla. También afila herramientas como tijeras, podadoras y más...',
    },
    {
      id: 2,
      name: 'Smartwatch Deportivo',
      image: 'https://m.media-amazon.com/images/I/71BxdJmyh7L._AC_SL1500_.jpg',
      description:
        'Controla el estrés, mejora tu sueño y optimiza tu actividad física con Sense 2, el smartwatch más avanzado...',
    },
    {
      id: 3,
      name: 'Mochila Antirrobo para Laptop',
      image: 'https://m.media-amazon.com/images/I/61ipIKejeRL._AC_SL1000_.jpg',
      description:
        'Material impermeable y diseño antirrobo con compartimientos inteligentes para laptops de hasta 15.6 pulgadas...',
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver en Amazon
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

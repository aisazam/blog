import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Afilador de Cuchillos',
      image: 'https://m.media-amazon.com/images/I/51bo2PL8c2L._AC_SL1024_.jpg',
      description: 'El diseño probado afila cuchillos y hojas dentadas de forma rápida y sencilla. También afila herramientas...',
    },
    {
      id: 2,
      name: 'Smartwatch Deportivo',
      image: 'https://m.media-amazon.com/images/I/71BxdJmyh7L._AC_SL1500_.jpg',
      description: 'Controla el estrés, mejora tu sueño y optimiza tu actividad física con Sense 2, el smartwatch más avanzado...',
    },
    {
      id: 3,
      name: 'Mochila Antirrobo para Laptop',
      image: 'https://m.media-amazon.com/images/I/61ipIKejeRL._AC_SL1000_.jpg',
      description: 'Material impermeable y diseño antirrobo con compartimientos inteligentes para laptops de hasta 15.6 pulgadas...',
    },
    {
      id: 4,
      name: 'Producto 4',
      image: 'https://m.media-amazon.com/images/I/61ipIKejeRL._AC_SL1000_.jpg',
      description:'descripcion del producto 4',
    }, 
    {
      id: 5,
      name: 'Producto 5',
      image: 'https://m.media-amazon.com/images/I/61ipIKejeRL._AC_SL1000_.jpg',
      description:'descripcion del producto 5',
    }, 
    {
      id: 6,
      name: 'Producto 6',
      image: 'https://m.media-amazon.com/images/I/61ipIKejeRL._AC_SL1000_.jpg',
      description:'descripcion del producto 6',
    }, 
  ];

  return (
    <Container className="my-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">
                  Ver más
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;


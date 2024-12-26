import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white py-4 mt-auto"
      style={{
        backgroundImage: "url('./assets/images/footer-bg.jpg')", // Imagen de fondo local
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Sección de información */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <p className="mb-0">
              © 2024 <span className="fw-bold">Blog de Productos</span>. Todos los derechos reservados.
            </p>
          </Col>
          {/* Enlaces de navegación */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <nav>
              <ul className="list-unstyled d-flex justify-content-center gap-4 mb-0">
                <li>
                  <Link to="/" className="text-white text-decoration-none fw-light">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white text-decoration-none fw-light">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white text-decoration-none fw-light">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>

          {/* Iconos sociales */}
            <Col xs={12} md={4} className="text-md-end">
              <div className="d-flex justify-content-md-end justify-content-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-instagram fs-5"></i>
                </a>
              </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

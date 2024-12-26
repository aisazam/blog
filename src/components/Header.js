import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '..//assets/images/header.png'; // Ajusta el path según tu proyecto


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div
  className="text-center text-white py-5"
  style={{
    backgroundImage: `url(${heroImage})`, // Imagen de fondo local
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Para manejar la superposición
  }}
>
  {/* Capa de fondo semitransparente */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro semitransparente
      zIndex: 1,
    }}
  ></div>

  {/* Título */}
  <h1
    className="display-4 fw-bold"
    style={{
      color: 'white', // Texto claro
      textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Sombra para mejor visibilidad
      zIndex: 2, // Asegura que el texto esté encima de la capa
      position: 'relative',
    }}
  >
    Compra de forma inteligente e informado
  </h1>
</div>

      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo */}
          <a href="#" className="navbar-brand fs-3 fw-bold">
            Fitness<span className="text-primary">Logo</span>
          </a>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Collapsible Content */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Acerca De
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                    Servicios
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contacto
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex ms-lg-3">
              <input
                type="text"
                className="form-control form-control-sm me-2"
                placeholder="Search"
              />
              <button className="btn btn-primary btn-sm" type="submit">
                <FiSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

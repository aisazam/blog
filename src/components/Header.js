import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "..//assets/images/header.png"; // Ajusta el path según tu proyecto
import AuthForm from "./AuthForm";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(null); // Almacena el correo del usuario logueado

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserLoggedIn(null); // Limpia el usuario logueado
      toast.success("Sesión cerrada exitosamente");
    } catch (error) {
      toast.error("Error al cerrar sesión: " + error.message);
    }
  };

  return (
    <header>
      <div
        className="text-center text-white py-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <h1
          className="display-4 fw-bold"
          style={{
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            zIndex: 2,
            position: "relative",
          }}
        >
          Compra de forma inteligente e informado
        </h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand fs-3 fw-bold">
            Fitness<span className="text-primary">Logo</span>
          </a>
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
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
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
              <li className="nav-item">
                {userLoggedIn ? (
                  <>
                    <span className="navbar-text text-white me-3">
                      Bienvenido, {userLoggedIn}
                    </span>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowAuth(true)}
                  >
                    Iniciar Sesión / Registrarse
                  </button>
                )}
                <div className="navbar-nav ms-auto">
                  {showAuth && (
                    <AuthForm
                      setUserLoggedIn={setUserLoggedIn}
                      onClose={() => setShowAuth(false)}
                    />
                  )}
                </div>
              </li>
            </ul>

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

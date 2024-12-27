import React, { useState } from "react";
import { auth } from "../Firebase";
import { db } from "../Firebase"; // Tu configuración de Firebase
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const AuthForm = ({ setUserLoggedIn, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e, setAuthorized) => {
    e.preventDefault();
    try {
      if (isLogin) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const userEmail = userCredential.user.email;
          if (userEmail === "arisaza1489@gmail.com") {
            toast.success("Bienvenido, tienes acceso como administrador");
            setAuthorized(true); // Usuario autorizado
          } else {
            toast.error("Acceso denegado: no tienes permisos de administrador");
            setAuthorized(false);
          }
          toast.success("Inicio de sesión exitoso", {
            className: "custom-toast",
            bodyClassName: "custom-toast-body",
            progressClassName: "custom-toast-progress",
          });
          setUserLoggedIn(userCredential.user.email); // Actualiza el usuario
          onClose(); // Cierra el formulario
        } catch (error) {
          toast.error(`Error: ${error.message}`);
          console.error("Error al iniciar sesión:", error.message);
        }
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registro exitoso", {
          className: "custom-toast",
          bodyClassName: "custom-toast-body",
          progressClassName: "custom-toast-progress",
        });
        setIsLogin(true); // Cambia al formulario de inicio de sesión
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
        progressClassName: "custom-toast-progress",
      });
    }
  };

  return (
    <div
      className="auth-form-container p-4 rounded shadow-lg"
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        backgroundColor: "white",
        zIndex: 1050,
      }}
    >
      <h2 className="text-center mb-4">
        {isLogin ? "Iniciar Sesión" : "Registrarse"}
      </h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary mb-3">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </button>
      </form>
      <button
        className="btn btn-link text-primary"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Crear una cuenta" : "¿Ya tienes una cuenta? Inicia sesión"}
      </button>
    </div>
  );
};

export default AuthForm;

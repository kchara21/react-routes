import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink to="/" className="active">
            Home
          </NavLink>
          <NavLink to="/about" className="active">
            About
          </NavLink>
          <NavLink to="/contact" className="active">
            Contact
          </NavLink>
          <NavLink to="/no-existe" className="active">
            Error 404
          </NavLink>
        </li>
        <li>
          <span>Parametros: </span>
          <Link to="/user/kaleb chara">Kaleb Chara</Link>
        </li>
        <li>
          <span>Parametros de Consulta: </span>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas: </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;

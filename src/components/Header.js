import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Conoce Tu Ruta</h1>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link> | <Link to="/routes">Rutas</Link> | <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre">
      <header className="sobre-header">
        <h1>Sobre Nosotros</h1>
        <p>Este proyecto busca facilitar la información sobre rutas de transporte foráneas en San Juan del Río.</p>
      </header>
      <section className="sobre-content">
        <h2>Nuestra Historia</h2>
        <p>ConoceTuRuta nació con la visión de ayudar a las personas a encontrar rutas confiables y eficientes para sus necesidades diarias de transporte.</p>
        <h2>Nuestros Valores</h2>
        <ul>
          <li>Compromiso</li>
          <li>Transparencia</li>
          <li>Innovación</li>
        </ul>
      </section>
    </div>
  );
}

export default Sobre;

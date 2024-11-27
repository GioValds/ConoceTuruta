import React, { useState } from 'react';
import './Rutas.css'; // Asegúrate de crear este archivo para los estilos específicos de esta página

const rutasData = [
  {
    id: 1,
    title: 'Ruta 1',
    image: 'https://via.placeholder.com/150?text=Ruta+1',
    info: 'Información detallada sobre la Ruta 1. Esta ruta conecta los principales puntos de la ciudad.',
    link: 'https://example.com/ruta1',
  },
  {
    id: 2,
    title: 'Ruta 2',
    image: 'https://via.placeholder.com/150?text=Ruta+2',
    info: 'Información detallada sobre la Ruta 2. Ideal para viajar hacia el norte de la ciudad.',
    link: 'https://example.com/ruta2',
  },
  {
    id: 3,
    title: 'Ruta 3',
    image: 'https://via.placeholder.com/150?text=Ruta+3',
    info: 'Información detallada sobre la Ruta 3. Recorre la zona este de la ciudad.',
    link: 'https://example.com/ruta3',
  },
  // Agrega más rutas según sea necesario
];

function Rutas() {
  const [selectedRuta, setSelectedRuta] = useState(null); // Estado para controlar el pop-up

  const handleImageClick = (ruta) => {
    setSelectedRuta(ruta); // Abre el pop-up con la información de la ruta seleccionada
  };

  const closePopup = () => {
    setSelectedRuta(null); // Cierra el pop-up
  };

  return (
    <div className="rutas-container">
      <h1>Rutas Disponibles</h1>
      <div className="rutas-grid">
        {rutasData.map((ruta) => (
          <div key={ruta.id} className="ruta-item" onClick={() => handleImageClick(ruta)}>
            <img src={ruta.image} alt={ruta.title} className="ruta-image" />
            <p>{ruta.title}</p>
          </div>
        ))}
      </div>

      {/* Pop-up */}
      {selectedRuta && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ✕
            </button>
            <img src={selectedRuta.image} alt={selectedRuta.title} className="popup-image" />
            <h2>{selectedRuta.title}</h2>
            <p>{selectedRuta.info}</p>
            <a href={selectedRuta.link} target="_blank" rel="noopener noreferrer" className="popup-link">
              Más información
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rutas;

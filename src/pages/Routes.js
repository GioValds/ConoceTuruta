import React from 'react';
import RouteCard from '../components/RouteCard';

function RoutesPage() {
  const routes = [
    { routeName: 'Ruta 1', description: 'De Querétaro a San Miguel de Allende.', schedule: '6:00 AM - 8:00 PM' },
    { routeName: 'Ruta 2', description: 'De Querétaro a Celaya.', schedule: '7:00 AM - 9:00 PM' },
  ];

  return (
    <div>
      <h2>Rutas Disponibles</h2>
      {routes.map((route, index) => (
        <RouteCard
          key={index}
          routeName={route.routeName}
          description={route.description}
          schedule={route.schedule}
        />
      ))}
    </div>
  );
}

export default RoutesPage;

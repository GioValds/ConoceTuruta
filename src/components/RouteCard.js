import React from 'react';

function RouteCard({ routeName, description, schedule }) {
  return (
    <div className="route-card">
      <h3>{routeName}</h3>
      <p>{description}</p>
      <p><strong>Horario:</strong> {schedule}</p>
    </div>
  );
}

export default RouteCard;

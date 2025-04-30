import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/Routes';

const TarjetaReceta = ({ receta }) => {
  const navigate = useNavigate();

  const verDetalles = () => {
    navigate(ROUTES.detalles.replace(":id", receta.id));
  };  

  return (
    <div>
      <img src={receta.imagen} alt={receta.nombre} />
      <h3>{receta.nombre}</h3>
      <p><strong>País de origen:</strong> {receta.pais_origen}</p>
      <p><strong>Tiempo de preparación:</strong> {receta.tiempo_preparacion}</p>
      <button onClick={verDetalles}>
        Ver Detalles
      </button>
    </div>
  );
};

export default TarjetaReceta;
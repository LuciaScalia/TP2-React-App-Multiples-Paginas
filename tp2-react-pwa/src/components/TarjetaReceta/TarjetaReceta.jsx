import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/Routes';
import { useTranslation } from 'react-i18next';

const TarjetaReceta = ({ receta }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const verDetalles = () => {
    navigate(ROUTES.detalles.replace(":id", receta.id));
  };  

  const agregarFav = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.some(fav => fav.id === receta.id)) {
      favoritos.push(receta);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
  }

  return (
    <div>
      <img src={receta.imagen} alt={receta.nombre} style={{ maxWidth: '500px'}}  />
      <h3>{receta.nombre}</h3>
      <p><strong>País de origen:</strong> {receta.pais_origen}</p>
      <p><strong>Tiempo de preparación:</strong> {receta.tiempo_preparacion}</p>
      <button onClick={verDetalles}>
        {t('details')}
      </button>
      <button onClick={agregarFav}>❤️</button>
    </div>
  );
};

export default TarjetaReceta;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../const/Routes';
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
      <p><strong>{t('countryOfOrigin')}:</strong> {receta.pais}</p>
      <p><strong>{t('totalTime')}:</strong> {receta.tiempo}</p>
      <button onClick={verDetalles}>
        {t('details')}
      </button>
      <button onClick={agregarFav}>❤️</button>
    </div>
  );
};

export default TarjetaReceta;
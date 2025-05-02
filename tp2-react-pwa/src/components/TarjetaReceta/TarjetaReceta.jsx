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

  return (
    <div>
      <img src={receta.imagen} alt={receta.nombre} />
      <h3>{receta.nombre}</h3>
      <p><strong>{t('countryOfOrigin')}:</strong> {receta.pais}</p>
      <p><strong>{t('totalTime')}:</strong> {receta.tiempo}</p>
      <button onClick={verDetalles}>
        {t('details')}
      </button>
    </div>
  );
};

export default TarjetaReceta;
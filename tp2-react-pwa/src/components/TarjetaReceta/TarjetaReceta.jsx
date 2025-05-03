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
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex-col">

      <div className="h-48 bg-gray-300 cursor-pointer overflow-hidden" onClick={verDetalles}>
        <img src={receta.imagen} alt={receta.nombre} className="w-full h-full object-cover"/>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{receta.nombre}</h3>
        <p className="text-sm text-gray-500">
          <strong>{t('countryOfOrigin')}:</strong> {receta.pais}
        </p>
        <p className="text-sm text-gray-500">
          <strong>{t('totalTime')}:</strong> {receta.tiempo}
        </p>
        <p className="text-sm text-gray-700">{receta.descripcion}</p>

        <div className="mt-4 flex justify-end">
          <button onClick={agregarFav}>❤️</button>
        </div>

      </div>
    </div>
  );
};

export default TarjetaReceta;
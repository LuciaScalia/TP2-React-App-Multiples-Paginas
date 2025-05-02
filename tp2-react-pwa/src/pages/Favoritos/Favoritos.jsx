import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Favoritos() {
  const [favoritos, setFavoritos] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    const listaFavs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(listaFavs);
  }, []);

  const eliminarFavorito = (id) => {
    const nuevosFavoritos = favoritos.filter(receta => receta.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };
  if (!favoritos) {
    return <h1>{t('loading')}</h1>;
  }
  return (
    <div>
      <Header/>
      <h1>🟡 Página: Favoritos</h1>
      <div>
        {favoritos.length > 0 ? (
          favoritos.map(receta => (
            <div key={receta.id}>
              <img src={receta.imagen} alt={receta.nombre} width="100" />
              <h3>{receta.nombre}</h3>
              <h4>{receta.descripcion}</h4>
              <button onClick={() => eliminarFavorito(receta.id)}>❌ Quitar</button>
            </div>
          ))
        ) : (
          <p>No hay recetas en favoritos aún.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default Favoritos;

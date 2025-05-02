import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import ROUTES from '../../const/Routes'
=======
import ROUTES from '../../routes/Routes'
import React, { useEffect, useState } from 'react';
>>>>>>> f99f67ffe876fb5d730bc1c12c1663d5ce417107

function Favoritos() {
  const navigate = useNavigate()
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const listaFavs = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(listaFavs);
  }, []);

  const eliminarFavorito = (id) => {
    const nuevosFavoritos = favoritos.filter(receta => receta.id !== id);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  return (
    <div>
      <h1>🟡 Página: Favoritos</h1>
      <button onClick={() => navigate(ROUTES.home)}>Volver al Home</button>
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
    </div>
  );
}

export default Favoritos

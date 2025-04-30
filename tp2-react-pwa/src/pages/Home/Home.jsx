import React, { useEffect, useState } from 'react';
import TarjetaReceta from '../../components/TarjetaReceta/TarjetaReceta';
import Header from '../../components/Header/Header';

const Home = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    fetch('https://68113cbe3ac96f7119a4032e.mockapi.io/api/v1/Recetas')
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos desde API:", data);
        setRecetas(data);
      })
      .catch((error) => console.error("Error al obtener las recetas:", error));
  }, []);

  return (
    
    <div>
      <Header/>
      <h1>Listado de Recetas</h1>
      
      <div>
        {recetas.map((receta) => (
          <TarjetaReceta key={receta.id} receta={receta} />
        ))}
      </div>
    </div>
  );
};

export default Home;
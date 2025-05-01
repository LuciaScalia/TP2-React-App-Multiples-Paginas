import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detalles = () => {
  const {id} = useParams();  
  const [recetaEnVista, setRecetaEnVista] = useState();
  
  const detallesReceta = async () => {
    try {
        const detallesRecetaResult = await fetch(`https://68113cbe3ac96f7119a4032e.mockapi.io/api/v1/Recetas/${id}`);
        const detallesRecetaResultParsed = await detallesRecetaResult.json();
        setRecetaEnVista(detallesRecetaResultParsed);
    } catch (error) {
        console.log(error + ": Error al recuperar los datos");
    }
  }; 

 useEffect(() => {
  detallesReceta();
 }, []);

 if (!recetaEnVista) {
  return <h1>Cargando...</h1>;
 }

  return (
    <div>
      <img src="imagen" alt={recetaEnVista.nombre} />
      <h4>{recetaEnVista.nombre}</h4>
    </div>
  );
};

export default Detalles;
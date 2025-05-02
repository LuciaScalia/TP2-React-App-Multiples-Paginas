import React, { useEffect, useState } from 'react';
import TarjetaReceta from '../../components/TarjetaReceta/TarjetaReceta';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import { useTranslation } from "react-i18next";

const Home = () => {
  const [recetas, setRecetas] = useState();
  const [busqueda, setBusqueda] = useState('');
  const [recetasFiltradas, setRecetasFiltradas] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const obtenerRecetas = async () => {
      try {
        const response = await fetch('https://68113cbe3ac96f7119a4032e.mockapi.io/api/v1/Recetas');
        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
        
        const data = await response.json();
        console.log("Datos desde API:", data);
        setRecetas(data);
      } catch (error) {
        console.error("Error al obtener las recetas:", error);
      }
    };

    obtenerRecetas();
  }, []);
  
  useEffect(() => {
    if (!recetas) return
    const texto = busqueda.toLowerCase();
    const filtradas = recetas.filter((receta) => {
      const nombreCoincide = receta.nombre.toLowerCase().includes(texto);
      const ingredientesCoinciden = receta.ingredientes?.some((ing) =>
        ing.toLowerCase().includes(texto)
      );
      return nombreCoincide || ingredientesCoinciden;
    });
    setRecetasFiltradas(filtradas);
  }, [busqueda, recetas]);
  if (!recetas) {
    return <h1>{t('loading')}</h1>;
  }
  return (
    <div>
      <Header />
      <h1>Listado de Recetas</h1>
      
      <input
        type="text"
        placeholder="Buscar"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
       <div>
        {recetasFiltradas.map((receta) => (
          <TarjetaReceta key={receta.id} receta={receta} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
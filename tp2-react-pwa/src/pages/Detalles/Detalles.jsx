import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';

const Detalles = () => {
  const {id} = useParams();  
  const [recetaEnVista, setRecetaEnVista] = useState();
  const { t } = useTranslation();
  
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
  });

  if (!recetaEnVista) {
    return <h1>{t('loading')}</h1>;
  }

  return (
    <div>
      <Header/>
      <div class='flex justify-center content-center'>
        <div class='flex flex-col md:flex-row justify-center border border-gray-600 content-center sm:w-full md:w-3/4 max-w-full md:rounded-md shadow-xl m-10'>
          <div class='w-full md:w-1/2'>
            <img src={recetaEnVista.imagen} alt={recetaEnVista.nombre} class='md:rounded-l-md'/>
            <div class='p-8 pt-4'>
              <h4 class='text-center font-dancing text-5xl'>{recetaEnVista.nombre}</h4>
              <div class='mt-5 text-gray-500'>
                <div class='p-1'>{t('countryOfOrigin')}: {recetaEnVista.pais}</div>
                <div class='p-1'>{t('totalTime')}: {recetaEnVista.tiempo}</div>
              </div>
              <h2 class='text-center font-dancing text-3xl mt-14'>{t('description')}</h2>
              <p class=' mt-10 pl-1 text-gray-700'>{recetaEnVista.descripcion}</p>
            </div>
          </div>

          <div class='w-full md:w-1/2 xs:border-t p-8 md:border-l border-gray-600'>

            <h2 class='text-center font-dancing text-3xl p-3'>{t('ingredients')}</h2>
              <ol class='list-disc ml-6'>
                {recetaEnVista.ingredientes.map((ingrediente) => (
                  <li class='m-3 text-gray-500'>{ingrediente}</li>
                ))}
              </ol>
            <h2 class='text-center font-dancing text-3xl'>{t('steps')}</h2>
            <div>
              <ol class='list-decimal'>
                {recetaEnVista.pasos.map((paso) => (
                  <li class='m-5 md:m-8 text-gray-700'>{paso}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
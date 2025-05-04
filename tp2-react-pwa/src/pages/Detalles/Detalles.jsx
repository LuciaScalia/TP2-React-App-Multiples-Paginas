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

  if (!recetaEnVista) return <h1 className="text-center text-lg">{t('loading')}</h1>;

  return (
    <div>
      <Header/>
      <div className='flex justify-center content-center'>
        <div className='flex flex-col md:flex-row justify-center border border-gray-600 content-center sm:w-full md:w-3/4 max-w-full md:rounded-md shadow-xl m-10'>
          <div className='w-full md:w-1/2'>
            <img src={recetaEnVista.imagen} alt={recetaEnVista.nombre} className='md:rounded-tl max-w-auto max-h-120'/>
            <div className='p-8 pt-4'>
              <h4 className='text-center font-dancing text-3xl'>{recetaEnVista.nombre}</h4>
              <div className='mt-5 text-gray-500'>
                <div className='p-1'>{t('countryOfOrigin')}: {recetaEnVista.pais}</div>
                <div className='p-1'>{t('totalTime')}: {recetaEnVista.tiempo}</div>
              </div>
              <h2 className='text-center font-dancing text-3xl p-3'>{t('ingredients')}</h2>
              <ol className='list-none'>
                {recetaEnVista.ingredientes.map((ingrediente, index) => (
                  <li key={index} className='m-3 text-gray-500'>{ingrediente}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className='w-full md:w-1/2 xs:border-t p-8 md:border-l border-gray-600'>
            <h2 className='text-center font-dancing text-3xl'>{t('description')}</h2>
            <p className='m-5 pl-6 text-gray-700'>{recetaEnVista.descripcion}</p>
            <h2 className='text-center font-dancing text-3xl'>{t('steps')}</h2>
            <div>
              <ol className='list-decimal'>
                {recetaEnVista.pasos.map((paso, index) => (
                  <li key={index} className='m-5 md:m-8 text-gray-700'>{paso}</li>
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
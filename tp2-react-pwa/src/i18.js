import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        details: "Details",
        language: "English",
        saved: "Favorites",
        home: "Home",
        totalTime: "Total time",
        countryOfOrigin: "Country of origin",
        loading: "Loading...",
        steps: "Steps",
        description: "Description",
        ingredients: "Ingredients",
        search: "Search by name or ingredient...",
        tittle: "List of Recipe"
      }
    },
    es: {
      translation: {
        details: "Detalles",
        language: "Español",
        saved: "Favoritos",
        home: "Inicio",
        totalTime: "Tiempo de preparación",
        countryOfOrigin: "País de origen",
        loading: "Cargando...",
        steps: "Pasos",
        description: "Decripción",
        ingredients: "Ingredientes",
        search: "Buscar por nombre o ingrediente...",
        tittle: "Lista de Recetas"
      }
    }
  },
  lng: localStorage.getItem("i18nextLng"), // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

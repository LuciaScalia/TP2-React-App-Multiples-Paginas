import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        details: "Details",
        language: "English",
        saved: "Saved",
        home: "Home",
        totalTime: "Total time",
        countryOfOrigin: "Country of origin",
        loading: "Loading..."
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
        loading: "Cargando..."
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

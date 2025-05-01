import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        details: "Details",
      }
    },
    es: {
      translation: {
        details: "Detalles",
      }
    }
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;

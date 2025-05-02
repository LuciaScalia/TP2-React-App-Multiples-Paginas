import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ROUTES from "../../const/Routes";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";


const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation(); 
  const [idioma, setIdioma] = useState(localStorage.getItem("i18nextLng") || "es");

  const cambiarIdioma = () => {
    const nuevoIdioma = idioma === "es" ? "en" : "es";
    i18n.changeLanguage(nuevoIdioma);
    //setIdioma(nuevoIdioma);
    localStorage.setItem("i18nextLng", nuevoIdioma);
  }

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      setIdioma(lng);
    });
  }, []);
  

  return (
    <header>
      <div>
        <button onClick={() => navigate(ROUTES.home)}>🏠 {t('home')}</button>
        {location.pathname !== ROUTES.favoritos && (
          <button onClick={() => navigate(ROUTES.favoritos)}>⭐ Favoritos</button>
        )}
        <button onClick={cambiarIdioma}>{idioma === "en" ? "🟥" : "🟦"} {t('language')}</button>
      </div>
    </header>
  );
};

export default Header;
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ROUTES from "../../const/Routes";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [idioma, setIdioma] = useState(localStorage.getItem("i18nextLng") || "es");

  const cambiarIdioma = () => {
    const nuevoIdioma = idioma === "es" ? "en" : "es";
    i18n.changeLanguage(nuevoIdioma);
    localStorage.setItem("i18nextLng", nuevoIdioma);
  };

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      setIdioma(lng);
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div>
          <button onClick={() => navigate(ROUTES.home)} className="text-blue-600 font-semibold text-lg font-semibold">
            🏠 {t("home")}
          </button>
        </div>

        <div className="flex items-center gap-4">
          {location.pathname !== ROUTES.favoritos && (
            <button onClick={() => navigate(ROUTES.favoritos)} className="text-yellow-500 font-semibold text-lg font-semibold">
              ⭐ {t("saved")}
            </button>
          )}
          <button
            onClick={cambiarIdioma}
            className="text-gray-600 text-lg font-medium"
          >
            {idioma === "en" ? "🟥" : "🟦"} {t("language")}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

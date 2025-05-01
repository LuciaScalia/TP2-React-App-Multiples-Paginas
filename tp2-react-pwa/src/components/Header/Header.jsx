import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/Routes";


const Header = () => {
  const navigate = useNavigate();


  return (
    <header>
      <div>
        <button onClick={() =>  navigate(ROUTES.home)}>🏠 Home</button>
        <button onClick={() => navigate(ROUTES.favoritos)}>⭐ Favoritos</button>
      </div>
    </header>
  );
};

export default Header;
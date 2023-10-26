/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/home" className="navlink">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default ErrorPage;

import Logo from "@/assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <NavLink
          to="/home"
          className="navlink"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "1px solid #ff6060" }
              : { borderBottom: "unset" }
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className="navlink"
          style={({ isActive }) =>
            isActive
              ? { borderBottom: "1px solid #ff6060" }
              : { borderBottom: "unset" }
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

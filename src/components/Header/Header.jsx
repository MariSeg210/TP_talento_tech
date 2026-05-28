import "./Header.css";

import logo from "../../assets/logo1.png";
import { Nav } from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="main-header">
      {/*Logo y nombre de la tienda*/}
      <div className="nav-header">
        <div className="header">
          <Link>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        {/* Navegación */}
        <Nav />
      </div>
    </header>
  );
};

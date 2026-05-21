import "./Header.css";
import logo from "../../assets/logo.png";
import { Nav } from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className="header">
        <Link>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <p>Tienda de Mascotas</p>
      <Nav />
    </header>
  );
};

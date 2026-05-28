import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
//Exportación nombrada.

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* BOTON MOBILE */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* MENU */}
      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/productos">Productos</Link>
          </li>

          <li>
            <Link to="/perro">Perro</Link>
          </li>

          <li>
            <Link to="/gato">Gato</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>

          <li>
            <Link to="/carrito" className="carrito-link">
              Carrito
              <RiShoppingCartLine id="carrito" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

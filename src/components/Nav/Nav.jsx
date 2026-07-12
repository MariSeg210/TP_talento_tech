import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../context/CartContext";

//Exportación nombrada.

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const [menuOpen, setMenuOpen] = useState(false);
  const cerrarMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      {/* BOTON MOBILE */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* MENU */}
      <nav className={`nav ${menuOpen ? "nav--abierto" : ""}`}>
        <ul className="nav-lista" onClick={cerrarMenu}>
          {/* Enlace a cada sección del sitio usando Link de react-router-dom */}
          <li className="nav-item">
            <Link to="/" className="nav-enlace">
              Inicio
            </Link>
          </li>
          {/* Productos sin el carrusel*/}
          <li className="nav-item">
            <Link to="/productos" className="nav-enlace">
              Productos
            </Link>
          </li>
          {/* Enlaces a categorías específicas */}
          <li className="nav-item">
            <Link to={"/category/perro"} className="nav-enlace">
              Perro
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/category/gato"} className="nav-enlace">
              Gato
            </Link>
          </li>

          {/*  <li>
            <Link to="/contacto">Contacto</Link>
          </li> */}

          <li className="nav-item nav-item--carrito">
            <Link
              to="/carrito"
              className="nav-enlace nav-enlace--carrito"
              onClick={cerrarMenu}
            >
              <RiShoppingCartLine id="carrito" className="icono-carrito" />

              {totalItems > 0 && (
                <span className="contador-carrito">{totalItems}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

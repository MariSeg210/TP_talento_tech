import "./Nav.css";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
//Exportación nombrada.
export const Nav = () => {
  return (
    <nav>
      <ul>
        {/* Inicio */}
        <li>
          <Link to={"/"}>Inicio </Link>
        </li>
        {/* Productos */}
        <li>
          <Link to={"/"}>Productos </Link>
        </li>
        {/* Perro */}
        <li>
          <Link to={"/"}>Perro </Link>
        </li>
        {/* Gato */}
        <li>
          <Link to={"/"}>Gato </Link>
        </li>
        <li>
          <Link to={"/contacto"}>Contacto</Link>
        </li>
        {/* Carrito */}
        <li>
          <Link to={"/carrito"}>
            Carrito
            <RiShoppingCartLine id="carrito" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

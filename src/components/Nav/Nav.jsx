import "./Nav.css";
import { Link } from "react-router-dom";

//Exportación nombrada.
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/"}>Productos </Link>
        </li>
        <li>
          <Link to={"/"}>Perros </Link>
        </li>
        <li>
          <Link to={"/"}>Gatos </Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};

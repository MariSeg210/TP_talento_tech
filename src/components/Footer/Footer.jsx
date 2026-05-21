import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <Link>
        <nav>
          <ul className="lista">
            <li className="redes">Whatsapp</li>
            <li className="redes">Instagram</li>
          </ul>
        </nav>
      </Link>
      <p>
        &copy; 2026 Tienda Personal. Todos los derechos reservados. Hecho por
        Marisa Segura
      </p>
    </footer>
  );
};

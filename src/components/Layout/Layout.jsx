import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

function Layout({ children }) {
  //este children es el contenido de cada pagina (componentes), lo que se va a mostrar en el main
  return (
    <div>
      <Header />
      <main>{children} //aqui va el contenido de cada pagina</main>
      <Footer />
    </div>
  );
}
export default Layout;

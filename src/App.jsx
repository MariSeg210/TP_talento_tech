import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Routes, Route } from "react-router-dom";
import { Count } from "./components/Count/Count.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

import "./App.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<h1>Carrito de compras</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

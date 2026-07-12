import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { Count } from "./components/Count/Count.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Carrusel } from "./components/Carrusel/Carrusel.jsx";
import "./App.css";

import { CartView } from "./components/Cart/CartView.jsx";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer.jsx";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./components/Login/Login.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard.jsx";
function App() {
  return (
    <>
      <main>
        <Routes>
          {/* Rutas Publicas*/}
          <Route element={<PublicLayout />}>
            <Route
              path="/"
              element={
                <>
                  <Carrusel />
                  <ItemListContainer />
                </>
              }
            />
            {/*ruta opcional para filtrar */}
            <Route path="/category/:category" element={<ItemListContainer />} />
            {/*ruta raiz */}
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartView />} />
          </Route>

          {/*Login */}
          <Route path="/admin/login" element={<Login />} />

          {/*Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Si el admin está logueado, redirige a la ruta /admin/dashboard */}
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<ProductFormContainer />} />
            {/* <Route path="*" element={<h2>Página no encontrada</h2>} />*/}

            <Route path="products/new" element={<ProductFormContainer />} />
          </Route>
          <Route
            path="admin/products/success/:id"
            element={<ProductSuccess />}
          />
        </Routes>
      </main>
      {/*<Footer />*/}
    </>
  );
}

export default App;

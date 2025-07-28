import { BrowserRouter, Routes, Route } from "react-router-dom";
// import context
import { ProductsProvider } from "./contexts/ProductsContext";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      {/* add browser router component  */}
      <BrowserRouter>
        <ProductsProvider>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<SingleProductPage />} />
              {/* inizializzo il path "*" catch-all per vedere la pagina 404 in ogni route diversa da quelle dichiarate */}
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </ProductsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

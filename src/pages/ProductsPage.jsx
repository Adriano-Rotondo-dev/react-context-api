import ProductList from "../components/ProductList";

import { useEffect } from "react";
import axios from "axios";
//*import context
import { useProducts } from "../contexts/ProductsContext";

export default function ProductsPage() {
  const { products, setProducts } = useProducts();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <div className="container py-5">
        <h2 className="mb-4">I nostri prodotti</h2>
      </div>
      <ProductList products={products} />
    </main>
  );
}

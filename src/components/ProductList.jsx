import ProductCard from "./ProductCard";
import { useProducts } from "../contexts/ProductsContext";
import axios from "axios";
import { useEffect } from "react";

export default function ProductList() {
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
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

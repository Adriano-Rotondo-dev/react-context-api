import ProductCard from "./ProductCard";
import { useProducts } from "../contexts/ProductsContext";

export default function ProductList() {
  const { products } = useProducts();

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

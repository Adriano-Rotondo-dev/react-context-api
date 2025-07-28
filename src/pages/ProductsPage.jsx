import ProductList from "../components/ProductList";

//*import context

export default function ProductsPage({ products }) {
  return (
    <main>
      <div className="container py-5">
        <h2 className="mb-4">I nostri prodotti</h2>
        <ProductList products={products} />
      </div>
    </main>
  );
}

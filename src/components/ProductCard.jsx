import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="card h-100 p-3">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top p-3"
            alt={product.title}
          />
        </Link>
        <div className="card-body">
          <Link
            className="link link-underline link-underline-opacity-0"
            to={`/products/${product.id}`}
          >
            <h5 className="card-title">{product.title}</h5>
          </Link>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.category}</p>
          <p className="card-text">
            Valutazione degli utenti:⭐{product.rating.rate}
          </p>
          <p className="card-text">
            Numero di voti:
            {product.rating.count}
          </p>
          <p className="fw-bold text-primary">{product.price.toFixed(2)} €</p>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
//*importo axios in pagina
import axios from "axios";

import Loading from "../components/Loading";

//*importo useParams da react-router-dom per associarlo all'id dell'oggetto dell'array
//*importo useNavigate per la navigazione programmatica
import { useParams, useNavigate } from "react-router-dom";

export default function SingleProductPage() {
  const { id } = useParams();
  //*dichiaro il product, il setter e lo useState su un array vuoto
  const [product, setProduct] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  //*dichiaro la funzione useNavigate
  const navigate = useNavigate();

  //*axios effettua una AJAX request sul singolo prodotto tramite l'id
  //*restituisce in json
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
      setIsLoading(false);
    });
    //! ricorda la dipendenza [] o genero loop infinito di fetch request
    //*aggiorno la dipendenza vuota a [id] per la funzionalità del navigate
  }, [id]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* copia della card singola di product - soluzione temporanea */}
      <div className="container">
        <div className="col-sm-12 p-3">
          <div className="card d-flex flex-row w-100">
            <img
              src={product.image}
              className="img-fluid p-5 product-img"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <span className="fw-bold">Category:</span>
                {product.category}
              </p>
              {/* rate e count risultano undefined poiché rating è un array annidato
              optional chaining ?. per inserirli successivamente al rendering della pagina */}
              <p className="card-text">
                <span className="fw-bold">Valutazione degli utenti:</span>⭐
                {product.rating?.rate}
              </p>
              <p className="card-text">
                <span className="fw-bold">Numero di voti:</span>
                {product.rating?.count}
              </p>
              {/* price .toFixed(2) viene renderizzato con optional chaining .?  */}
              <p className="fw-bold text-primary">
                {product.price?.toFixed(2)} €
              </p>
            </div>
          </div>
          <div className="container m-5 d-flex justify-content-center gap-3">
            <button
              className="fw-semibold rounded-pill px-4 py-2"
              onClick={() => {
                if (product.id > 1) {
                  navigate(`/products/${product.id - 1}`);
                } else {
                  navigate("/object-not-found");
                }
              }}
            >
              Previous Item
            </button>
            <button
              className="fw-semibold rounded-pill px-4 py-2"
              onClick={() => navigate(`/products/${product.id + 1}`)}
            >
              Next Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

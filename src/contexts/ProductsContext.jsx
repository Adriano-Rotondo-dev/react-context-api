//import context from react
import { createContext, useContext, useState, useEffect } from "react";
import Loading from "../components/Loading";
import axios from "axios";

// this obj is our context
const ProductsContext = createContext();
//define custom provider for our context
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  // add state variables
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

//define hook that will consume context
function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

//export provider and hook
export { ProductsProvider, useProducts };

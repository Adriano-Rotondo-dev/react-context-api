//import context from react
import { createContext, useContext, useState } from "react";
// this obj is our context
const ProductsContext = createContext();
//define custom provider for our context
function ProductsProvider({ children }) {
  // add state variables
  const [products, setProducts] = useState([]);
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

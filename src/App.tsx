import { useState, useEffect } from "react";
import { INITIAL_PRODUCT, ProductType } from "./fixtures/fixtures";
import "./App.css";

// Components
import ProductMenu from "./components/ProductMenu/ProductMenu";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

function App() {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductType>(INITIAL_PRODUCT);
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <ProductMenu
          products={products}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <ProductDisplay selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}

export default App;

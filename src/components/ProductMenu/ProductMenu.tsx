import { useState, Dispatch, SetStateAction } from "react";
import { ProductType } from "../../fixtures/fixtures";
import "./ProductMenu.css";

type ProductMenuType = {
  products: ProductType[];
  selectedProduct: ProductType;
  setSelectedProduct: Dispatch<SetStateAction<ProductType>>;
};

const ProductMenu = ({
  products,
  selectedProduct,
  setSelectedProduct,
}: ProductMenuType) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { id, title } = selectedProduct;

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {id === 0 ? "Select a product" : title}
        <span className="arrow" data-testid="arrow-data-id"></span>
      </div>
      {isActive && (
        <div className="dropdown-content" data-testid="dropdown-data-id">
          {products.map((product: ProductType) => (
            <div
              key={product.id}
              className="dropdown-item"
              onClick={() => {
                setSelectedProduct(product);
                setIsActive(false);
              }}
            >
              {product.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductMenu;

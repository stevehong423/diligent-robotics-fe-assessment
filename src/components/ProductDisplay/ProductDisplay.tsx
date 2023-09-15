import { useState, useEffect } from "react";
import { ProductType } from "../../fixtures/fixtures";
import "./ProductDisplay.css";

type ProductDisplayType = {
  selectedProduct: ProductType;
};

const ProductDisplay = ({ selectedProduct }: ProductDisplayType) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { id, brand, category, description, images, price, title } =
    selectedProduct;

  useEffect(() => {
    setImageIndex(0);
  }, [selectedProduct]);

  const imageHandler = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((imageIndex) => imageIndex + 1);
    }
  };

  return (
    <>
      {id === 0 ? (
        <div className="default-text">No product selected</div>
      ) : (
        <div className="container">
          <div className="image-container">
            <img
              src={images[imageIndex]}
              className="image"
              alt="product-display"
              data-testid="image-data-id"
              onClick={imageHandler}
            />
          </div>

          <div className="info-container" data-testid="info-data-container">
            <div className="basic-info">
              <div className="title">{title}</div>
              <div className="category">{category}</div>
            </div>
            <div className="brand">{brand}</div>
            <div className="price">${price.toFixed(2)}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDisplay;

import { render, screen, fireEvent } from "@testing-library/react";
import ProductDisplay from "../ProductDisplay";
import { INITIAL_PRODUCT, VALID_PRODUCT } from "../../../fixtures/fixtures";

describe("<ProductDisplay />", () => {
  it("No Product Selected should show on initial render", () => {
    render(<ProductDisplay selectedProduct={INITIAL_PRODUCT} />);
    expect(screen.getByText("No product selected")).toBeInTheDocument();
  });

  it("Image should display when valid product is selected", () => {
    render(<ProductDisplay selectedProduct={VALID_PRODUCT} />);

    const image = screen.getByTestId("image-data-id");
    expect(image).toBeInTheDocument();
  });

  it("image should change when image is clicked", () => {
    render(<ProductDisplay selectedProduct={VALID_PRODUCT} />);

    const image = screen.getByTestId("image-data-id");

    fireEvent.click(image);
    expect(image).toHaveAttribute(
      "src",
      "https://i.dummyjson.com/data/products/1/3.jpg"
    );
  });

  it("Product information should display when valid product is selected", () => {
    render(<ProductDisplay selectedProduct={VALID_PRODUCT} />);

    const title = screen.getByText("iphone 9");
    const description = screen.getByText("Test Description");
    const product = screen.getByText("Apple");
    const price = screen.getByText("$549.00");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(product).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});

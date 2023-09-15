import { render, screen, fireEvent } from "@testing-library/react";
import ProductMenu from "../ProductMenu";
import { INITIAL_PRODUCT, VALID_PRODUCT } from "../../../fixtures/fixtures";

describe("<ProductMenu />", () => {
  it("Select a product should display if no product is selected", () => {
    render(
      <ProductMenu
        products={[INITIAL_PRODUCT]}
        selectedProduct={INITIAL_PRODUCT}
        setSelectedProduct={jest.fn}
      />
    );

    expect(screen.getByText("Select a product")).toBeInTheDocument();
  });

  it("dropdown menu should appear when arrow is clicked", () => {
    render(
      <ProductMenu
        products={[VALID_PRODUCT]}
        selectedProduct={INITIAL_PRODUCT}
        setSelectedProduct={jest.fn}
      />
    );

    const arrow = screen.getByTestId("arrow-data-id");
    fireEvent.click(arrow);
    expect(screen.getByTestId("dropdown-data-id")).toBeInTheDocument();
  });

  it("setState should be called when product in dropdown is clicked", () => {
    const mockSetState = jest.fn();
    render(
      <ProductMenu
        products={[INITIAL_PRODUCT, VALID_PRODUCT]}
        selectedProduct={INITIAL_PRODUCT}
        setSelectedProduct={mockSetState}
      />
    );

    const arrow = screen.getByTestId("arrow-data-id");
    fireEvent.click(arrow);

    const newProduct = screen.getByText("iphone 9");
    fireEvent.click(newProduct);

    expect(mockSetState).toHaveBeenCalled();
  });
});

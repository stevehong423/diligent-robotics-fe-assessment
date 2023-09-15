import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("app initially renders", () => {
    render(<App />);
    const linkElement = screen.getByText(/No product selected/i);
    expect(linkElement).toBeInTheDocument();
  });
});

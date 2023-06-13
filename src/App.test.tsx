import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders taskBox header", () => {
  render(<App />);
  const linkElement = screen.getByText(/taskbox/i);
  expect(linkElement).toBeInTheDocument();
});

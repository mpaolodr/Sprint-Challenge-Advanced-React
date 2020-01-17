import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("renders title", () => {
  const { getByTestId } = render(<App />);
  getByTestId("title");
});

test("renders players-container", () => {
  const { getByTestId } = render(<App />);
  getByTestId("players-container");
});

test("renders players-container-toggle", () => {
  const { getByTestId } = render(<App />);
  getByTestId("players-container-toggle");
});

test("renders ind-toggle", () => {
  const container = render(<App />);
  container.getByTestId("ind-player");
});

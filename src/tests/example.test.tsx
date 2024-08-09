import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/Home";

test("Describe here what the text is covering", async () => {
  render(<Home />);
  expect(screen.getByText("Happy hacking"));
});

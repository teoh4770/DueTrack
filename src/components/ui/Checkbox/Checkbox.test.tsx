import { Checkbox } from "./Checkbox";
import { render, screen } from "@testing-library/react";

describe("Checkbox component", () => {
  test("should render checkbox on the screen", () => {
    render(<Checkbox />)

    const $checkbox = screen.getByRole("checkbox");

    expect($checkbox).toBeInTheDocument();
  })

  test("should see button text render on the screen", () => {
    render(<Checkbox spanText="checkbox test"/>)
    
    const $spanText = screen.getByText("checkbox test")

    expect($spanText).toBeInTheDocument();
  });
})
import { ColorInput } from "./ColorInput";
import { render, screen } from "@testing-library/react";

describe("Color input component", () => {
  test('should render color input on the screen', () => {
    render(<ColorInput />)
    
    const $input = screen.getByLabelText(/color input/i)

    expect($input).toBeInTheDocument();
  });
  
  test("should show the label text on the screen", () => {
    render(<ColorInput spanText="testing"/>);

    const $span = screen.getByText("testing");

    expect($span).toBeInTheDocument();
  })

  test("should hide label on the screen when hideLabel is set to trues", () => {
    render(<ColorInput spanText="testing" hideLabel/>);

    const $span = screen.getByText("testing");

    expect($span).toHaveClass("sr-only");
  })

})

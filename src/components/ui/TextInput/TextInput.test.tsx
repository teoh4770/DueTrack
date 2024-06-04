import { render, screen } from "@testing-library/react";
import { TextInput } from "./TextInput";

describe("TextInput component", () => {
  test("should render TextInput component", () => {
    render(<TextInput />);

    const $textInput = screen.getByRole("textbox");

    expect($textInput).toBeInTheDocument();
  });

  test("should show the label text on the screen", () => {
    render(<TextInput spanText="testing" />);

    const $span = screen.getByText("testing");

    expect($span).toBeInTheDocument();
  });

  test("should hide label on the screen when hideLabel is set to trues", () => {
    render(<TextInput spanText="testing" hideLabel />);

    const $span = screen.getByText("testing");

    expect($span).toHaveClass("sr-only");
  });
});

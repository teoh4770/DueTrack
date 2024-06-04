import { render, screen } from "@testing-library/react";
import { DateInput } from "./DateInput";

describe("DateInput component", () => {
  test("should render date input on the screen", () => {
    render(<DateInput />);

    const $input = screen.getByLabelText("date input");

    expect($input).toBeInTheDocument();
  });

  test("should show the label text on the screen", () => {
    render(<DateInput spanText="testing" />);

    const $span = screen.getByText("testing");

    expect($span).toBeInTheDocument();
  });

  test("should hide label on the screen when hideLabel is set to trues", () => {
    render(<DateInput spanText="testing" hideLabel />);

    const $span = screen.getByText("testing");

    expect($span).toHaveClass("sr-only");
  });
});

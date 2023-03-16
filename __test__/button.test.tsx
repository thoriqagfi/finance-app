import { act, render, screen } from "@testing-library/react";
import Button from "@/components/button/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("Should render the Button", () => {
    act(() => {
      render(<Button />);
    })
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();

  });
})
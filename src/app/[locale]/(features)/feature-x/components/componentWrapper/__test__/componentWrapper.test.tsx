/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import BaseButton from "../componentWrapper";

describe("Component Wrapper Test", () => {
  it("renders correctly", () => {
    render(<BaseButton title="Button" />);

    const ButtonText = screen.getByText("Button").textContent;

    expect(ButtonText).toBe("Button");
  });

  it("handles onClick event", () => {
    const onClickMock = jest.fn();

    render(<BaseButton title="Button" onClick={onClickMock} />);

    const button = screen.getByText("Button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";

describe("Feature Y Test", () => {
  it("should render feature y without crashing", async () => {
    const serverComponent = await Page();
    render(serverComponent);
    expect((await screen.findByTestId("container")).textContent).toEqual(
      "Feature Y"
    );
  });
});

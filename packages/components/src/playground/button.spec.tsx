import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { variants } from "./button.stories";

describe("<Button />", () => {
  it("renders the component", () => {
    const { container } = render(variants());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <button
          class="p1cbykgn bj2syde"
        >
          Hello Button
        </button>
        <button
          class="s17794jv bj2syde"
        >
          Secondary Button
        </button>
      </div>
    `);
  });

  it("passes accessibility checks", async () => {
    const { container } = render(variants());
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

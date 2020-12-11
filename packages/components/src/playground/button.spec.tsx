import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { variants } from "./button.stories";

describe("<Button />", () => {
  it("renders the component", () => {
    const { container } = render(variants());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <button
          class="button__ButtonComponent-ak17f2-0 cBvwNx"
        >
          Hello Button
        </button>
        <button
          class="button__ButtonComponent-ak17f2-0 VxUNz"
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

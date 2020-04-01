import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { text } from "./button.stories";

describe("<Button />", () => {
  it("renders the component", () => {
    const { container } = render(text());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="czedi-btn "
      >
        Hello Button
      </button>
    `);
  });

  it("passes accessibility checks", async () => {
    const { container } = render(text());
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

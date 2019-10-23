import { text } from "./button.stories";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

describe("<Button />", () => {
  it("renders the component", () => {
    const { container } = render(text());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button>
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

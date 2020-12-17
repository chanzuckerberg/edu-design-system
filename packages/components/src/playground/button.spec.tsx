import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { variants } from "./button.stories";

describe("<Button />", () => {
  it("renders the component", () => {
    const { container } = render(variants());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <button>
          <p
            color="white"
          >
            Hello Button
          </p>
        </button>
        <button>
          <p
            color="white"
          >
            Secondary Button
          </p>
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

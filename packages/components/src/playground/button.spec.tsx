import { axe } from "jest-axe";
import { render } from "@testing-library/react";
import { variants } from "./button.stories";

describe("<Button />", () => {
  it("renders the component", () => {
    const { container } = render(variants());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        <button
          class="button__ButtonComponent-ak17f2-0 cKlymw"
        >
          <p
            class="typography__TypographyComponent-sc-8fjfkf-0 earSjG"
            color="white"
          >
            Hello Button
          </p>
        </button>
        <button
          class="button__ButtonComponent-ak17f2-0 dMLRAo"
        >
          <p
            class="typography__TypographyComponent-sc-8fjfkf-0 earSjG"
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

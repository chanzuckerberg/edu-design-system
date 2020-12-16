import { primary, secondary } from "./button.stories";
import { axe } from "jest-axe";
import { prepareStory } from "@chanzuckerberg/story-utils";
import { render } from "@testing-library/react";

describe("<Button />", () => {
  it("renders primary buttons", () => {
    const { container } = render(prepareStory(primary));
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="button__ButtonComponent-ak17f2-0 knVmlo"
      >
        <p
          class="typography__TypographyComponent-sc-8fjfkf-0 fBebuQ"
          color="white"
        >
          Primary Button
        </p>
      </button>
    `);
  });

  it("renders secondary buttons", () => {
    const { container } = render(prepareStory(secondary));
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button
        class="button__ButtonComponent-ak17f2-0 jDwPyC"
      >
        <p
          class="typography__TypographyComponent-sc-8fjfkf-0 fBebuQ"
          color="white"
        >
          Secondary Button
        </p>
      </button>
    `);
  });

  it("passes accessibility checks", async () => {
    const { container } = render(prepareStory(primary));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

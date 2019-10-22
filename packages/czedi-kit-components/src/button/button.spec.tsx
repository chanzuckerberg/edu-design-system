import { text } from "./button.stories";
import { render } from "@testing-library/react";

describe("<Button />", () => {
  it("renders the component", () => {
    const { container } = render(text());
    expect(container.firstChild).toMatchInlineSnapshot(`
      <button>
        Hello Button
      </button>
    `);
  });
});

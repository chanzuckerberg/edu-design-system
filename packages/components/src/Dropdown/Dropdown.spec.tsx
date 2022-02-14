import { generateSnapshots } from "@chanzuckerberg/story-utils";
import { composeStory } from "@storybook/testing-react";
import { fireEvent, screen, render } from "@testing-library/react";
import React from "react";
import Dropdown from "./Dropdown";
import * as stories from "./Dropdown.stories";

const { OpenByDefault, ...closedStories } = stories;

const OpenByDefaultComponent = composeStory(OpenByDefault, stories.default);

const exampleOptions = [
  {
    id: "option1",
    label: "Option 1",
  },
  {
    id: "option2",
    label: "Option 2",
  },
  {
    id: "option3",
    label: "Option 3",
  },
];

describe("<Dropdown />", () => {
  generateSnapshots(closedStories, {
    getElement: async () => {
      const openButton = await screen.findByRole("button");
      fireEvent.click(openButton);
      await screen.findAllByRole("option");
      return screen.getByTestId("dropdown");
    },
  });

  it("renders the OpenByDefault story", async () => {
    const { container } = render(<OpenByDefaultComponent />);
    await OpenByDefaultComponent.play({ canvasElement: container });
    expect(screen.getByTestId("dropdown")).toMatchSnapshot();
  });

  it("throws an error if children is used with labelText", () => {
    const dropdownWithChildrenAndLabelText = (
      <Dropdown
        labelText="Options:"
        onChange={() => undefined}
        value={exampleOptions[0]}
      >
        <Dropdown.Button>Select</Dropdown.Button>

        <Dropdown.Options>
          {exampleOptions.map((option) => (
            <Dropdown.Option key={option.id} value={option}>
              {option.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndLabelText);
    };

    expect(renderMethod).toThrow(Error);
  });

  it("throws an error if children is used with buttonText", () => {
    const dropdownWithChildrenAndButtonText = (
      <Dropdown
        buttonText="Select"
        onChange={() => undefined}
        value={exampleOptions[0]}
      >
        <Dropdown.Label>Options:</Dropdown.Label>

        <Dropdown.Options>
          {exampleOptions.map((option) => (
            <Dropdown.Option key={option.id} value={option}>
              {option.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndButtonText);
    };

    expect(renderMethod).toThrow(Error);
  });

  it("throws an error if children is used with options", () => {
    const dropdownWithChildrenAndOptions = (
      <Dropdown
        onChange={() => undefined}
        options={exampleOptions}
        value={exampleOptions[0]}
      >
        <Dropdown.Label>Options:</Dropdown.Label>
        <Dropdown.Button>Select</Dropdown.Button>
      </Dropdown>
    );
    const renderMethod = () => {
      render(dropdownWithChildrenAndOptions);
    };

    expect(renderMethod).toThrow(Error);
  });
});

import { StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const exampleOptions = [
  {
    id: "1",
    label: "Dogs",
  },
  {
    id: "2",
    label: "Cats",
  },
  {
    id: "3",
    label: "Birds",
  },
];

function InteractiveExampleUsingChildren() {
  const [selectedOption, setSelectedOption] =
    React.useState<typeof exampleOptions[0]>();

  return (
    <Dropdown
      className="w-60"
      data-testid="dropdown"
      onChange={setSelectedOption}
      value={selectedOption}
    >
      <Dropdown.Label>Favorite Animal</Dropdown.Label>
      <Dropdown.Button>{selectedOption?.label || "Select"}</Dropdown.Button>
      <Dropdown.Options>
        {exampleOptions.map((option) => (
          <Dropdown.Option key={option.id} value={option}>
            {option.label}
          </Dropdown.Option>
        ))}
      </Dropdown.Options>
    </Dropdown>
  );
}

function InteractiveExampleUsingOptions() {
  const [selectedOption, setSelectedOption] =
    React.useState<typeof exampleOptions[0]>();

  return (
    <Dropdown
      className="w-60"
      data-testid="dropdown"
      onChange={setSelectedOption}
      options={exampleOptions}
      value={selectedOption}
    >
      <Dropdown.Label>Favorite Animal</Dropdown.Label>
      <Dropdown.Button>{selectedOption?.label || "Select"}</Dropdown.Button>
    </Dropdown>
  );
}

export const Default: StoryObj = {
  render: () => <InteractiveExampleUsingChildren />,
};

export const UsingOptionsProp: StoryObj = {
  render: () => <InteractiveExampleUsingOptions />,
};

// This story just opens the dropdown automataically so chromatic can test it.
export const OpenByDefault: StoryObj = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    button.click();
  },
  parameters: {
    // The HTML for this story is the same as the Default story, which is already
    // has snapshot tests.
    snapshot: { skip: true },
  },
};

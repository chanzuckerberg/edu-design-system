import { StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import React from "react";
import FilterListRoundedIcon from "../Icons/FilterListRounded";
import Dropdown, { OptionsAlignType } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

type Props = {
  labelText?: string;
  "aria-label"?: string;
  labelComponent?: React.ReactNode;
  compact?: boolean;
  optionsAlign?: OptionsAlignType;
};

const exampleOptions = [
  {
    key: "1",
    label: "a",
  },
  {
    key: "2",
    label: "abcde",
  },
  {
    key: "3",
    label: "abcdefghij",
  },
];

function InteractiveExampleUsingSeparateProps(props: Props) {
  const { compact, optionsAlign } = props;

  const [selectedOption, setSelectedOption] =
    React.useState<typeof exampleOptions[0]>();

  return (
    <div className={`h-48${optionsAlign === "right" ? " pl-96" : ""}`}>
      <Dropdown
        buttonText={selectedOption?.label || "Select"}
        className={compact ? "" : "w-60"}
        compact={compact}
        data-testid="dropdown"
        onChange={setSelectedOption}
        options={exampleOptions}
        optionsAlign={optionsAlign}
        value={selectedOption}
        {...props}
      />
    </div>
  );
}

function InteractiveExampleUsingChildren(props: Props) {
  const { compact } = props;

  const [selectedOption, setSelectedOption] =
    React.useState<typeof exampleOptions[0]>();

  return (
    <div className="h-48">
      <Dropdown
        aria-label={props["aria-label"]}
        className={compact ? "" : "w-60"}
        compact={compact}
        data-testid="dropdown"
        onChange={setSelectedOption}
        value={selectedOption}
      >
        {props.labelComponent}
        <Dropdown.Button>{selectedOption?.label || "Select"}</Dropdown.Button>
        <Dropdown.Options>
          {exampleOptions.map((option) => (
            <Dropdown.Option key={option.key} value={option}>
              {option.label}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    </div>
  );
}

// This story just tests the case where a function in passed in that wraps the children.
function InteractiveExampleUsingFunctionChildren() {
  const [selectedOption, setSelectedOption] =
    React.useState<typeof exampleOptions[0]>();

  return (
    <div className="h-48">
      <Dropdown
        aria-label="Favorite Animal"
        as="div"
        className="w-60"
        data-testid="dropdown"
        onChange={setSelectedOption}
        value={selectedOption}
      >
        {({ open }) => (
          <>
            <Dropdown.Button
              // Because we're using a render prop to completely control the styling and icon of the
              // button, we need to configure this component to render as a Fragment. Otherwise we'd
              // render two, nested buttons.
              as={React.Fragment}
            >
              {() => (
                <button
                  aria-expanded={open}
                  className="p-4 rounded-md border border-neutral-300"
                >
                  {selectedOption?.label || "Select"}
                  <FilterListRoundedIcon
                    className="ml-2"
                    purpose="decorative"
                  />
                </button>
              )}
            </Dropdown.Button>
            <Dropdown.Options>
              {exampleOptions.map((option) => (
                <Dropdown.Option key={option.key} value={option}>
                  {option.label}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
          </>
        )}
      </Dropdown>
    </div>
  );
}

export const Default: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps labelText="Favorite Animal" />
  ),
};

export const DefaultWithoutVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps aria-label="Favorite Animal" />
  ),
};

export const Compact: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps
      aria-label="Favorite Animal"
      compact
    />
  ),
};

export const CompactWithOptionsRightAligned: StoryObj = {
  render: () => (
    <InteractiveExampleUsingSeparateProps
      aria-label="Favorite Animal"
      compact
      optionsAlign="right"
    />
  ),
};

export const UsingChildrenProp: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren
      labelComponent={<Dropdown.Label>Favorite Animal</Dropdown.Label>}
    />
  ),
};

export const UsingChildrenPropAndNoVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" />
  ),
};

export const CompactUsingChildrenPropAndNoVisibleLabel: StoryObj = {
  render: () => (
    <InteractiveExampleUsingChildren aria-label="Favorite Animal" compact />
  ),
};

export const UsingFunctionChildrenProp: StoryObj = {
  render: () => <InteractiveExampleUsingFunctionChildren />,
};

// This story just opens the dropdown automataically so chromatic can test it.
export const OpenByDefault: StoryObj = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the dropdown.
    const dropdownButton = await canvas.findByRole("button");
    dropdownButton.click();
    const bestOption = await canvas.findByText("a");
    bestOption.click();
    // Reopen the dropdown; selecting an option closed it.
    dropdownButton.click();
  },
};

import type { StoryObj } from "@storybook/react";
import React from "react";
import EDSCheckbox, { CheckboxInput, Label } from "./Checkbox";

type Args = React.ComponentProps<typeof EDSCheckbox>;

/**
 * Controlled example to make checked stories interactive.
 * We name this "Checkbox" for Storybook's code documentation
 */
function Checkbox({ checked: defaultChecked = false, ...rest }: Args) {
  const [checked, setChecked] = React.useState(defaultChecked);
  const handleChange = () => {
    setChecked(!checked);
  };

  return <EDSCheckbox checked={checked} onChange={handleChange} {...rest} />;
}

export default {
  title: "Checkbox",
  component: Checkbox,
  args: {
    disabled: false,
    label: "Checkbox",
  },
  argTypes: {
    // for some reason TS does not infer this type correctly,
    // so we explicitly provide a radio control instead
    checked: {
      control: {
        type: "radio",
      },
      options: [true, false, "indeterminate"],
    },
  },
};

export const Default: StoryObj<Args> = {};

export const Checked: StoryObj<Args> = {
  ...Default,
  args: {
    checked: true,
  },
};

export const Small: StoryObj<Args> = {
  ...Default,
  args: {
    size: "small",
  },
};

export const SmallChecked: StoryObj<Args> = {
  ...Default,
  args: {
    checked: true,
    size: "small",
  },
};

export const Indeterminate: StoryObj<Args> = {
  render: () => (
    <EDSCheckbox checked="indeterminate" label="Checkbox" readOnly />
  ),
};

export const Disabled = {
  render: () => (
    <table className="border-separate" style={{ borderSpacing: "2rem" }}>
      <tbody>
        {[false, true, "indeterminate" as const].map((checked, i) => (
          <tr key={i}>
            <td>
              <EDSCheckbox checked={checked} disabled label="Disabled" />
            </td>
            <td>
              <EDSCheckbox checked={checked} label="Default" readOnly />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
  parameters: {
    // mainly for demonstration purposes
    snapshot: { skip: true },
  },
};

export const WithoutVisibleLabel: StoryObj<Args> = {
  ...Default,
  args: {
    "aria-label": "a checkbox has no name",
    label: undefined,
  },
};

export const LongLabels = {
  render: () => {
    const label = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

    return (
      <div className="w-80 grid grid-cols-2 gap-4">
        <Checkbox label={label} />
        <Checkbox label={label} size="small" />
      </div>
    );
  },
};

export const WithCustomPositioning = {
  render: () => (
    <span>
      <Label htmlFor="test">label on left</Label>
      <CheckboxInput id="test" />
    </span>
  ),
};

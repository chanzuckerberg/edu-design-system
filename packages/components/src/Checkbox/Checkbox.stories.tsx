import type { StoryObj } from "@storybook/react";
import React from "react";
import Checkbox, { CheckboxInput, Label } from "./Checkbox";
import styles from "./Checkbox.stories.module.css";

const defaultArgs = {
  disabled: false,
  label: "Checkbox",
};

export default {
  title: "Checkbox",
  component: Checkbox,
  args: defaultArgs,
  // for some reason TS infers this as an object type
  argTypes: {
    checked: {
      control: {
        type: "radio",
      },
      options: [true, false, "indeterminate"],
    },
  },
};

type Args = React.ComponentProps<typeof Checkbox>;

/**
 * Controlled example to make checked stories interactive.
 */
function CheckedExample(args: Args) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      {...defaultArgs}
      {...args}
    />
  );
}

export const Default: StoryObj<Args> = {};

export const Checked = {
  render: () => <CheckedExample />,
};

export const Small: StoryObj<Args> = {
  ...Default,
  args: {
    size: "small",
  },
};

export const SmallChecked = {
  render: () => <CheckedExample size="small" />,
};

export const Indeterminate: StoryObj<Args> = {
  ...Default,
  args: {
    checked: "indeterminate",
    readOnly: true,
  },
};

export const Disabled = {
  render: () => (
    <table className={styles.disabledTable}>
      <tbody>
        {[false, true, "indeterminate" as const].map((checked, i) => (
          <tr key={i}>
            <td>
              <Checkbox checked={checked} disabled label="Disabled" />
            </td>
            <td>
              <Checkbox checked={checked} label="Default" readOnly />
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
      <div className={styles.longLabelContainer}>
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

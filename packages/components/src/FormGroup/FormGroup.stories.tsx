import type { StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "../Checkbox";
import FormGroup from "./FormGroup";

export default {
  component: FormGroup,
};

type Args = React.ComponentProps<typeof FormGroup>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <FormGroup.Title>Title</FormGroup.Title>
        <FormGroup.Items>
          <Checkbox label="Checkbox label 1" />
          <Checkbox label="Checkbox label 2" />
          <Checkbox label="Checkbox label 3" />
          <Checkbox label="Checkbox label 4" />
          <Checkbox label="Checkbox label 5" />
        </FormGroup.Items>
      </>
    ),
  },
};

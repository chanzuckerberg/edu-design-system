import * as React from "react";
import { Story } from "@storybook/react/types-6-0";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent",
  component: TestComponent,
};

type Args = React.ComponentProps<typeof TestComponent>;

const Template: Story<Args> = (args) => <TestComponent {...args} />;

export const Default = Template.bind(null);
Default.args = {
  children: "Hello world",
  align: "left",
};

export const RightAligned = Template.bind(null);
RightAligned.args = {
  children: "Hello world",
  align: "right",
};

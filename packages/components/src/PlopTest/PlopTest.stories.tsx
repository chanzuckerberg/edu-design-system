import * as React from "react";
import PlopTest from "./PlopTest";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "PlopTest",
  component: PlopTest,
};

type Args = React.ComponentProps<typeof PlopTest>;

const Template: Story<Args> = (args) => <PlopTest {...args} />;

export const Default = Template.bind(null);
Default.args = {
  children: "Hello world",
};

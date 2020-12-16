import * as React from "react";
import EDSGlobalStyles from "../src/styles/global";
import { addDecorator } from "@storybook/react";

addDecorator((storyFn) => (
  <div dir="ltr">
    <EDSGlobalStyles />
    {storyFn()}
  </div>
));

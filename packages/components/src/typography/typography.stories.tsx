import * as React from "react";

import Typography from "./typography";

export default {
  title: "Typography",
  component: Typography,
};

export const Examples = (): JSX.Element => (
  <div>
    <Typography size="default">Default body text</Typography>
    <Typography color="alert" size="default">
      Alert body text
    </Typography>
    <Typography as="h2" size="h3">
      Heading 2 styled as Heading 3
    </Typography>
  </div>
);

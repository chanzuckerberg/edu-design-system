import * as React from "react";

import Typography from "./typography";

export default {
  title: "Typography",
  component: Typography,
};

export const LegacySizeRamp = (): JSX.Element => (
  <div>
    <Typography bold size="h1">
      H1 Page Title
    </Typography>
    <br />
    <Typography size="h1">H1 Heading 1 24/32</Typography>
    <br />
    <br />
    <Typography bold size="h2">
      H2 Heading 2
    </Typography>
    <br />
    <Typography size="h2">H2 Heading 2 18/24</Typography>
    <br />
    <br />
    <Typography bold size="h3">
      H3 Heading 3
    </Typography>
    <br />
    <Typography size="h3">H3 Heading 3 18/24</Typography>
    <br />
    <br />
    <Typography bold size="h4">
      H4 Heading 4
    </Typography>
    <br />
    <Typography size="h4">H4 Heading 4 14/24</Typography>
    <br />
    <br />
    <Typography bold size="h5">
      H5 Heading 5
    </Typography>
    <br />
    <Typography size="h5">H5 Heading 5 12/20</Typography>
    <br />
    <br />
    <Typography bold size="body">
      Body paragraph header
    </Typography>
    <br />
    <Typography size="body">Body paragraph 16/24</Typography>
    <br />
    <br />
    <Typography bold size="sm">
      Body small text
    </Typography>
    <br />
    <Typography size="sm">Body small 14/20</Typography>
    <br />
    <br />
    <Typography bold size="xs">
      Body Xsmall text
    </Typography>
    <br />
    <Typography size="xs">Body Xsmall 12/16</Typography>
    <br />
    <br />
    <Typography bold size="button">
      Button Text 14/24
    </Typography>
    <br />
    <Typography size="caption">Caption 12/20</Typography>
    <br />
    <Typography size="overline">Overline 12/20</Typography>
  </div>
);

export const Examples = (): JSX.Element => (
  <div>
    <Typography size="body">Default body text</Typography>
    <Typography color="brand" size="body">
      Brand color text
    </Typography>
    <Typography bold size="h1">
      Bold heading 1
    </Typography>
    <Typography as="h1" size="h4">
      Heading 1 styled as Heading 4
    </Typography>
  </div>
);

export const Colors = (): JSX.Element => (
  <div>
    <Typography size="body">Base color text</Typography>
    <Typography color="alert" size="body">
      Alert color text
    </Typography>
    <Typography color="brand" size="body">
      Brand color text
    </Typography>
    <Typography color="info" size="body">
      Info color text
    </Typography>
    <Typography color="success" size="body">
      Success color text
    </Typography>
    <Typography color="warning" size="body">
      Warning color text
    </Typography>
  </div>
);

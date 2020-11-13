import * as React from "react";

import Typography from "./typography";

export default {
  title: "Typography",
  component: Typography,
};

export const SizeRamp = (): JSX.Element => (
  <div>
    <Typography bold size="h1">
      Heading 1 48/64 bold
    </Typography>
    <Typography size="h1">Heading 1 48/64</Typography>
    <br />
    <Typography bold size="h2">
      Heading 2 40/56 bold
    </Typography>
    <Typography size="h2">Heading 2 40/56</Typography>
    <br />
    <Typography bold size="h3">
      Heading 3 32/40 bold
    </Typography>
    <Typography size="h3">Heading 3 32/40</Typography>
    <br />
    <Typography bold size="h4">
      Section Head 24/32
    </Typography>
    <Typography size="h4">Page Title 24/32</Typography>
    <br />
    <Typography bold size="h5">
      Section Sub Head 18/24
    </Typography>
    <Typography size="h5">Heading 5 18/24</Typography>
    <br />
    <Typography bold size="body">
      Paragraph header 16/24
    </Typography>
    <Typography size="body">Paragraph text 16/24</Typography>
    <br />
    <Typography bold size="sm">
      Small body text 14/20 bold
    </Typography>
    <Typography size="sm">Small body text 14/20</Typography>
    <br />
    <Typography bold size="xs">
      Xsmall body text 12/16 bold
    </Typography>
    <Typography size="xs">Year timeline, Year list 12/16</Typography>
    <br />
    <Typography bold size="button">
      Button text 14/24
    </Typography>
    <br />
    <Typography size="caption">Caption 12/20</Typography>
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

import React from 'react';

import filterTokens from '../../../util/filterTokens';
import { Grid } from '../../Grid/Grid';
import { Section } from '../../Section/Section';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export const FontSizes = () => (
  <Section title="Font Sizes">
    <Grid>
      {filterTokens(`eds-font-size`).map(function (listItem) {
        return (
          <Grid.Item key={listItem.name}>
            <TokenSpecimen
              inlineStyles={{
                fontSize: `var(${listItem.name})`,
              }}
              name={listItem.name}
              value={listItem.value}
              variant="typography-title"
            />
          </Grid.Item>
        );
      })}
    </Grid>
  </Section>
);

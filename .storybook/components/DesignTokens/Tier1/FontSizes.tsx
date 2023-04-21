import React from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export const FontSizes = () => (
  <Section title="Font Sizes">
    <Grid>
      {filterTokens(`eds-font-size`).map(function (listItem) {
        return (
          <GridItem key={listItem.name}>
            <TokenSpecimen
              inlineStyles={{
                fontSize: `var(${listItem.name})`,
              }}
              name={listItem.name}
              value={listItem.value}
              variant="typography-title"
            />
          </GridItem>
        );
      })}
    </Grid>
  </Section>
);

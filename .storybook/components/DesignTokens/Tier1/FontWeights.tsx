import React from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export const FontWeights = () => (
  <Section title="Font Weights">
    <Grid>
      {filterTokens(`eds-font-weight`).map(function (listItem) {
        return (
          <GridItem key={listItem.name}>
            <TokenSpecimen
              inlineStyles={{
                fontWeight: `var(${listItem.name})`,
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

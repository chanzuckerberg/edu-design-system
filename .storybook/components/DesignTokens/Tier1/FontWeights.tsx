import React from 'react';
import filterTokens from '../../../util/filterTokens';
import Grid from '../../Grid';
import Section from '../../Section';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export const FontWeights = () => (
  <Section title="Font Weights">
    <Grid>
      {filterTokens(`eds-font-weight`).map(function (listItem) {
        return (
          <Grid.Item key={listItem.name}>
            <TokenSpecimen
              inlineStyles={{
                fontWeight: `var(${listItem.name})`,
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

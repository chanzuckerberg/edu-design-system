import React from 'react';
import Grid from '../../../../src/components/Grid';
import Section from '../../../../src/components/Section';
import filterTokens from '../../../util/filterTokens';
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

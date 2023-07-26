import React from 'react';
import { Grid, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export const FontFamilies = () => (
  <Section title="Font Families">
    <Grid>
      {filterTokens(`eds-font-family`).map(function (listItem) {
        return (
          <Grid.Item key={listItem.name}>
            <TokenSpecimen
              inlineStyles={{
                fontFamily: `var(${listItem.name})`,
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

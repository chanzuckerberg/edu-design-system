import React from 'react';
import filterTokens from '../../../util/filterTokens';

import Grid from '../../Grid';
import Section from '../../Section';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export default {
  title: 'Design Tokens/Tier 1: Definitions/Typography',
  parameters: {
    a11y: {
      // For documentation purposes only
      test: 'off',
    },
  },
};

export const FontFamily = {
  render: () => (
    <Section title="Font Families">
      <Grid>
        {filterTokens(`eds-typography-font-family`)
          .filter(function (listItem) {
            // do not include any of the offsets, if they exist
            return listItem.name.indexOf('offset') === -1;
          })
          .map(function (listItem) {
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
  ),
};
export const FontWeight = {
  render: () => (
    <Section title="Font Weights">
      <Grid>
        {filterTokens(`eds-typography-font-weight`).map(function (listItem) {
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
  ),
};

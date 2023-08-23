import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Section, Grid } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export default {
  title: 'Design Tokens/Tier 3: Component',
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div>
      <Section title="Slider Size">
        <Grid>
          {filterTokens(`eds-theme-size`).map(function (listItem) {
            return (
              <Grid.Item key={listItem.name}>
                <TokenSpecimen
                  inlineStyles={{
                    width: `var(${listItem.name})`,
                    height: `var(${listItem.name})`,
                    minHeight: '0',
                  }}
                  name={listItem.name}
                  value={listItem.value}
                />
              </Grid.Item>
            );
          })}
        </Grid>
      </Section>
    </div>
  ),
};

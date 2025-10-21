import type { StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import filterTokens from '../../../util/filterTokens';
import Grid from '../../Grid';
import Section from '../../Section';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export default {
  title: 'Design Tokens/Tier 2: Usage',
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

export const BorderRadii: StoryObj = {
  render: () => (
    <div>
      <Section title="Border Radii">
        <Grid>
          {filterTokens(`eds-theme-border-radius`).map(function (listItem) {
            return (
              <Grid.Item key={listItem.name}>
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: 'black',
                    borderRadius: `calc(var(${listItem.name}) * 1px)`,
                  }}
                  name={listItem.name}
                  value={listItem.value + 'px'}
                />
              </Grid.Item>
            );
          })}
        </Grid>
      </Section>
    </div>
  ),
};

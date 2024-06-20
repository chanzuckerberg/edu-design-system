import type { StoryObj } from '@storybook/react';
import React from 'react';
import Grid from '../../../../src/components/Grid';
import Section from '../../../../src/components/Section';
import filterTokens from '../../../util/filterTokens';
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

export const Forms: StoryObj = {
  render: () => (
    <Section title="Form Border">
      <Grid>
        {filterTokens(`eds-theme-form-border-width`).map((listItem) => (
          <Grid.Item key={listItem.name}>
            <TokenSpecimen
              inlineStyles={{
                backgroundColor: 'transparent',
                borderWidth: `calc(var(${listItem.name}) * 1px)`,
                borderStyle: 'solid',
                borderColor: 'black',
              }}
              name={listItem.name}
              value={listItem.value + 'px'}
            />
          </Grid.Item>
        ))}

        {filterTokens(`eds-theme-form-border-radius`).map((listItem) => (
          <Grid.Item key={listItem.name}>
            <TokenSpecimen
              inlineStyles={{
                backgroundColor: 'transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'black',
                borderRadius: `calc(var(${listItem.name}) * 1px)`,
              }}
              name={listItem.name}
              value={listItem.value + 'px'}
            />
          </Grid.Item>
        ))}
      </Grid>
    </Section>
  ),
};

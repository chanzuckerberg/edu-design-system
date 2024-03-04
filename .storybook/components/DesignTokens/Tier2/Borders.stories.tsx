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

export const Borders: StoryObj = {
  render: () => (
    <div>
      <Section title="Border Width">
        <Grid>
          {filterTokens(`eds-theme-border-width`).map(function (listItem) {
            return (
              <Grid.Item key={listItem.name}>
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: 'transparent',
                    borderWidth: `var(${listItem.name})`,
                    borderStyle: 'solid',
                    borderColor: 'black',
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

import type { StoryObj } from '@storybook/react';
import { at, capitalize, forEach } from 'lodash';

import React from 'react';
import usages from '../../../../src/design-tokens/tier-2-usage/typography.json';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore importing of a legacy utility file results in some 'any's, which is acceptable for this docs page
import flatten from '../../../util/flattenToken';
import { Grid } from '../../Grid/Grid';
import { Section } from '../../Section/Section';

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

export const Typography: StoryObj = {
  render: () => {
    const values: {
      [key: string]: {
        [key: string]: string;
      };
    } = {};
    forEach(at(usages, 'eds.theme.typography')[0], (_, key) => {
      values[key] = flatten(
        at(usages, `eds.theme.typography.${key}`)[0],
        `eds-theme-typography-${key}-`,
      );
    });

    // Flatten all the tier 2 tokens, group them by usage, and print specimens for the results
    return (
      <div>
        {Object.keys(values).map((section) => {
          return (
            <Section key={section} title={capitalize(section)}>
              <Grid>
                {Object.keys(values[section]).map((usage) => {
                  return (
                    <TokenSpecimen
                      inlineStyles={{ font: values[section][usage] }}
                      key={usage}
                      name={usage}
                      value={values[section][usage]}
                      variant="typography-body"
                    />
                  );
                })}
              </Grid>
            </Section>
          );
        })}
      </div>
    );
  },
};

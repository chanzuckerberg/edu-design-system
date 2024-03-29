import type { StoryObj } from '@storybook/react';
import { at, capitalize, forEach, merge } from 'lodash';

import React from 'react';
import Grid from '../../../../src/components/Grid';
import Section from '../../../../src/components/Section';
import breadcrumb from '../../../../src/design-tokens/tier-3-component/breadcrumb-typography.json';
import button from '../../../../src/design-tokens/tier-3-component/buttons-typography.json';
import form from '../../../../src/design-tokens/tier-3-component/forms-typography.json';
import link from '../../../../src/design-tokens/tier-3-component/link-typography.json';
import tab from '../../../../src/design-tokens/tier-3-component/tab-typography.json';
import tag from '../../../../src/design-tokens/tier-3-component/tag-typography.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore importing of a legacy utility file results in some 'any's, which is acceptable for this docs page
import flatten from '../../../util/flattenToken';
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

export const Typography: StoryObj = {
  render: () => {
    const values: {
      [key: string]: {
        [key: string]: string;
      };
    } = {};
    const componentTypography = merge(breadcrumb, button, form, link, tab, tag);
    forEach(at(componentTypography, 'eds.theme.typography')[0], (_, key) => {
      values[key] = flatten(
        at(componentTypography, `eds.theme.typography.${key}`)[0],
        `eds-theme-typography-${key}-`,
      );
    });

    // Flatten all the tier 3 tokens, group them by component, and print specimens for the results
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

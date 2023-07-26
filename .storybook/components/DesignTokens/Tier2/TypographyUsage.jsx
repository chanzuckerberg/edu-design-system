import { at, capitalize, forEach } from 'lodash';

import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import usages from '../../../../src/design-tokens/tier-2-usage/typography.json';
import flatten from '../../../util/flattenToken';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2TypographyUsage extends Component {
  render() {
    const values = {};
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
  }
}

import { at, forEach } from 'lodash';

import React, { Component } from 'react';
import Grid from '../../../../src/components/Grid';
import Section from '../../../../src/components/Section';
import presets from '../../../../src/design-tokens/tier-1-definitions/typography.json';
import flatten from '../../../util/flattenToken';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1TypographyPresets extends Component {
  render() {
    const values = {};
    forEach(at(presets, 'eds.typography')[0], (_, key) => {
      values[key] = flatten(
        at(presets, `eds.typography.${key}`)[0],
        `eds-typography-${key}-`,
      );
    });

    return (
      <div>
        {Object.keys(values).map((section) => {
          return (
            <Section key={section} title="Typography Presets">
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

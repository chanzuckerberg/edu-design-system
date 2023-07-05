import { at, capitalize, forEach, merge } from 'lodash';

import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import breadcrumb from '../../../../src/design-tokens/tier-3-component/breadcrumb.json';
import button from '../../../../src/design-tokens/tier-3-component/buttons.json';
import form from '../../../../src/design-tokens/tier-3-component/forms.json';
import link from '../../../../src/design-tokens/tier-3-component/link.json';
import tab from '../../../../src/design-tokens/tier-3-component/tab.json';
import tag from '../../../../src/design-tokens/tier-3-component/tag.json';
import flatten from '../../../util/flattenToken';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class TypographyComponents extends Component {
  render() {
    const values = {};
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
  }
}

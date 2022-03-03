import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';
import tokens from '../../../data/tokens.json';

export class Tier1Shadows extends Component {
  render() {
    return (
      <div>
        <Section title="Shadows">
          <Grid>
            {filterTokens(`eds-box-shadow-`).map(function (listItem, index) {
              return (
                <GridItem key={'box-shadow-' + index}>
                  <TokenSpecimen
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      backgroundColor: '#fbfbfb',
                      boxShadow: `var(${listItem.name})`,
                    }}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>
      </div>
    );
  }
}

function filterTokens(prefix) {
  return Object.entries(tokens)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, { value, comment }]) => ({
      name: `--${name}`,
      value,
      comment,
    }));
}

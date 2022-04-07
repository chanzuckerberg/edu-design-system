import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Shadows extends Component {
  render() {
    return (
      <div>
        <Section title="Box Shadow">
          <Grid>
            {filterTokens(`eds-theme-box-shadow`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'box-shadow-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: '#fbfbfb',
                      boxShadow: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
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

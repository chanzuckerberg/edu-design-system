import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Layout extends Component {
  render() {
    return (
      <div>
        <Section title="Layout">
          <Grid>
            {filterTokens(`eds-l-`).map(function (listItem, index) {
              return (
                <GridItem key={'l-' + index}>
                  <TokenSpecimen
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      maxWidth: `var(${listItem.name})`,
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

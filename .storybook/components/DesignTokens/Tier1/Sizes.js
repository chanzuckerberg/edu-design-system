import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';
import tokens from '../../../data/tokens.json';

export class Tier1Sizes extends Component {
  render() {
    return (
      <div>
        <Section title="Size">
          <Grid>
            {filterTokens(`eds-size`).map(function (listItem, index) {
              return (
                <GridItem key={'size-' + index}>
                  <TokenSpecimen
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      width: `var(${listItem.name})`,
                      height: `var(${listItem.name})`,
                      minHeight: '0',
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

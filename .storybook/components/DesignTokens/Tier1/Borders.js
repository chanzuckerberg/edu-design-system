import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Borders extends Component {
  render() {
    return (
      <div>
        <Section title="Border Width">
          <Grid>
            {filterTokens(`eds-border-width`).map(function (listItem, index) {
              return (
                <GridItem key={'border-width-' + index}>
                  <TokenSpecimen
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: `var(${listItem.name})`,
                      borderStyle: 'solid',
                      borderColor: 'black',
                    }}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Border Radius">
          <Grid>
            {filterTokens(`eds-border-radius`).map(function (listItem, index) {
              return (
                <GridItem key={'border-radius-' + index}>
                  <TokenSpecimen
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: 'black',
                      borderRadius: `var(${listItem.name})`,
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

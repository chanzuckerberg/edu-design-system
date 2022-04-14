import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Borders extends Component {
  render() {
    return (
      <div>
        <Section title="Border Width">
          <Grid>
            {filterTokens(`eds-theme-border-width`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'border-width-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: `var(${listItem.name})`,
                      borderStyle: 'solid',
                      borderColor: 'black',
                    }}
                    name={listItem.name}
                    value={listItem.value}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Border Radius">
          <Grid>
            {filterTokens(`eds-theme-border-radius`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'border-width-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '1px',
                      borderRadius: `var(${listItem.name})`,
                      borderStyle: 'solid',
                      borderColor: 'black',
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

import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1TypographyTokens extends Component {
  render() {
    return (
      <div>
        <Section title="Font Family">
          <Grid>
            {filterTokens(`eds-font-family`).map(function (listItem, index) {
              return (
                <GridItem key={'font-family-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      fontFamily: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="typography-title"
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Font Size">
          <Grid>
            {filterTokens(`eds-font-size`).map(function (listItem, index) {
              return (
                <GridItem key={'font-size-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      fontSize: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="typography-title"
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Font Weight">
          <Grid>
            {filterTokens(`eds-font-weight`).map(function (listItem, index) {
              return (
                <GridItem key={'font-weight-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      fontWeight: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="typography-title"
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Line Height">
          <Grid>
            {filterTokens(`eds-line-height`).map(function (listItem, index) {
              return (
                <GridItem key={'line-height-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      lineHeight: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="typography-body"
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
    .sort()
    .map(([name, { value, comment }]) => ({
      name: `--${name}`,
      value,
      comment,
    }));
}

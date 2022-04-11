import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Forms extends Component {
  render() {
    return (
      <div>
        <Section title="Form Border">
          <Grid>
            {filterTokens(`eds-theme-form-border-width`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-width-' + index}>
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

            {filterTokens(`eds-theme-form-border-radius`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-radius-' + index}>
                  <TokenSpecimen
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '1px',
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

        <Section title="Form Label Colors">
          <Grid>
            {filterTokens(`eds-theme-color-form-label-foreground`).map(
              function (listItem, index) {
                return (
                  <GridItem key={'form-label-foreground' + index}>
                    <TokenSpecimen
                      name={listItem.name}
                      value={listItem.value}
                      variant="typography-title"
                      inlineStyles={{
                        color: `var(${listItem.name})`,
                      }}
                    />
                  </GridItem>
                );
              },
            )}
          </Grid>
        </Section>

        <Section title="Form Input Colors">
          <Grid>
            {filterTokens(`eds-theme-color-form-input-border`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border' + index}>
                  <TokenSpecimen
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: `var(${listItem.name})`,
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

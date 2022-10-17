import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Forms extends Component {
  render() {
    return (
      <div>
        <Section title="Form Border">
          <Grid>
            {filterTokens(`eds-theme-form-border-width`).map(function (
              listItem,
            ) {
              return (
                <GridItem key={listItem.name}>
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

            {filterTokens(`eds-theme-form-border-radius`).map(function (
              listItem,
            ) {
              return (
                <GridItem key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'black',
                      borderRadius: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Form Label Colors">
          <Grid>
            {filterTokens(`eds-theme-color-form-label-foreground`).map(
              function (listItem) {
                return (
                  <GridItem key={listItem.name}>
                    <TokenSpecimen
                      inlineStyles={{
                        color: `var(${listItem.name})`,
                      }}
                      name={listItem.name}
                      value={listItem.value}
                      variant="typography-title"
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
            ) {
              return (
                <GridItem key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: `var(${listItem.name})`,
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

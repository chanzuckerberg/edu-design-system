import React, { Component } from 'react';
import { Section, Grid, GridItem } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Colors extends Component {
  render() {
    return (
      <div>
        <Section title="Text Colors">
          <Grid>
            {filterTokens(`eds-theme-color-text`).map(function (
              listItem,
              index,
            ) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    color: `var(${listItem.name})`,
                  }}
                  key={index}
                  name={listItem.name}
                  value={listItem.value}
                  variant="typography-title"
                />
              );
            })}
          </Grid>
        </Section>
        <Section title="Icon Colors">
          <Grid>
            {filterTokens(`eds-theme-color-icon`).map(function (
              listItem,
              index,
            ) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    color: `var(${listItem.name})`,
                  }}
                  key={index}
                  name={listItem.name}
                  value={listItem.value}
                  variant="typography-title"
                />
              );
            })}
          </Grid>
        </Section>
        <Section title="Background Colors">
          <Grid>
            {filterTokens(`eds-theme-color-background`).map(function (
              listItem,
              index,
            ) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: `var(${listItem.name})`,
                  }}
                  key={index}
                  name={listItem.name}
                  value={listItem.value}
                />
              );
            })}
          </Grid>
        </Section>
        <Section title="Border Colors">
          <Grid>
            {filterTokens(`eds-theme-color-border`).map(function (
              listItem,
              index,
            ) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: 'transparent',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: `var(${listItem.name})`,
                  }}
                  key={index}
                  name={listItem.name}
                  value={listItem.value}
                />
              );
            })}
          </Grid>
        </Section>

        <Section title="Body Colors">
          <Grid>
            {filterTokens(`eds-theme-color-body`).map(function (
              listItem,
              index,
            ) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: `var(${listItem.name})`,
                  }}
                  key={index}
                  name={listItem.name}
                  value={listItem.value}
                />
              );
            })}
          </Grid>
        </Section>

        <Section title="Link Colors">
          <Grid>
            {filterTokens(`eds-theme-color-text-link`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-' + index}>
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
            })}
          </Grid>
        </Section>

        <Section title="Form Colors">
          <h3>Form Label</h3>
          <Grid>
            {filterTokens(`eds-theme-color-form-label`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-' + index}>
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
            })}
          </Grid>

          <h3>Form Input Borders</h3>
          <Grid>
            {filterTokens(`eds-theme-color-form-border`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-' + index}>
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

          <h3>Form Background</h3>
          <Grid>
            {filterTokens(`eds-theme-color-form-background`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: `var(${listItem.name})`,
                    }}
                    key={index}
                    name={listItem.name}
                    value={listItem.value}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Focus Ring">
          <h3>Focus Ring</h3>
          <Grid>
            {filterTokens(`eds-theme-color-focus-ring`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'focus-ring-' + index}>
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

        <Section title="Text Highlight">
          <Grid>
            {filterTokens(`eds-theme-color-text-highlight`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'text-highlight-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: `var(${listItem.name})`,
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

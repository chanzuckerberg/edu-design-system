import React, { Component } from 'react';
import { Section, Grid, GridItem, Heading } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Colors extends Component {
  render() {
    return (
      <div>
        <Section title="Text Colors">
          <Grid>
            {filterTokens(`eds-theme-color-text`).map(function (listItem) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    color: `var(${listItem.name})`,
                  }}
                  key={listItem.name}
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
            {filterTokens(`eds-theme-color-icon`).map(function (listItem) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    color: `var(${listItem.name})`,
                  }}
                  key={listItem.name}
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
            ) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: `var(${listItem.name})`,
                  }}
                  key={listItem.name}
                  name={listItem.name}
                  value={listItem.value}
                />
              );
            })}
          </Grid>
        </Section>
        <Section title="Border Colors">
          <Grid>
            {filterTokens(`eds-theme-color-border`).map(function (listItem) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: 'transparent',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: `var(${listItem.name})`,
                  }}
                  key={listItem.name}
                  name={listItem.name}
                  value={listItem.value}
                />
              );
            })}
          </Grid>
        </Section>

        <Section title="Body Colors">
          <Grid>
            {filterTokens(`eds-theme-color-body`).map(function (listItem) {
              return (
                <TokenSpecimen
                  inlineStyles={{
                    backgroundColor: `var(${listItem.name})`,
                  }}
                  key={listItem.name}
                  name={listItem.name}
                  value={listItem.value}
                />
              );
            })}
          </Grid>
        </Section>

        <Section title="Link Colors">
          <Grid>
            {filterTokens(`eds-theme-color-text-link`).map(function (listItem) {
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
            })}
          </Grid>
        </Section>

        <Section title="Form Colors">
          <Heading className="my-4" size="h3">
            Form Label
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-form-label`).map(function (
              listItem,
            ) {
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
            })}
          </Grid>

          <Heading className="my-4" size="h3">
            Form Input Borders
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-form-border`).map(function (
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

          <Heading className="my-4" size="h3">
            Form Background
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-form-background`).map(function (
              listItem,
            ) {
              return (
                <GridItem key={listItem.name}>
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

        <Section title="Focus Ring">
          <Heading className="my-4" size="h3">
            Focus Ring
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-focus-ring`).map(function (
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

        <Section title="Text Highlight">
          <Grid>
            {filterTokens(`eds-theme-color-text-highlight`).map(function (
              listItem,
            ) {
              return (
                <GridItem key={listItem.name}>
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

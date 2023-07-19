import React, { Component } from 'react';
import { Section, Grid, Heading } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Colors extends Component {
  render() {
    return (
      <div>
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

        <Section title="Transparent Colors">
          <Grid>
            {filterTokens(`eds-theme-color-transparent`).map(function (
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

        <Section title="Form Colors">
          <Heading className="my-4" size="h3">
            Form Background
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-form-background`).map(function (
              listItem,
            ) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                  />
                </Grid.Item>
              );
            })}
          </Grid>

          <Heading className="my-4" size="h3">
            Form Border
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-form-border`).map(function (
              listItem,
            ) {
              return (
                <Grid.Item key={listItem.name}>
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
                </Grid.Item>
              );
            })}
          </Grid>

          <Heading className="my-4" size="h3">
            Form Label
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-form-label`).map(function (
              listItem,
            ) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="typography-title"
                  />
                </Grid.Item>
              );
            })}
          </Grid>
        </Section>

        <Section title="Focus Ring">
          <Heading className="my-4" size="h3">
            Focus Ring
          </Heading>
          <Grid>
            {filterTokens(`eds-theme-color-focus`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
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
                </Grid.Item>
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
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                  />
                </Grid.Item>
              );
            })}
          </Grid>
        </Section>
      </div>
    );
  }
}

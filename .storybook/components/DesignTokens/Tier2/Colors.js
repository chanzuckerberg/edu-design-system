import React, { Component } from 'react';
import { Section, Grid, GridItem, Heading } from '../../../../src';
import tokens from '../../../data/tokens.json';
import { ColorList } from '../../ColorList/ColorList';
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
                  name={listItem.name}
                  key={index}
                  variant="typography-title"
                  value={listItem.value}
                  inlineStyles={{
                    color: `var(${listItem.name})`,
                  }}
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
                  name={listItem.name}
                  key={index}
                  variant="typography-title"
                  value={listItem.value}
                  inlineStyles={{
                    color: `var(${listItem.name})`,
                  }}
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
                  name={listItem.name}
                  key={index}
                  value={listItem.value}
                  inlineStyles={{
                    backgroundColor: `var(${listItem.name})`,
                  }}
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
                  name={listItem.name}
                  key={index}
                  value={listItem.value}
                  inlineStyles={{
                    backgroundColor: 'transparent',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: `var(${listItem.name})`,
                  }}
                />
              );
            })}
          </Grid>
        </Section>

        <Section title="Body Colors">
          <Grid variant="2up">
            <GridItem>
              <h3>Foreground</h3>
              {filterTokens(`eds-theme-color-body-foreground`).map(function (
                listItem,
                index,
              ) {
                return (
                  <GridItem key={'body-foreground-' + index}>
                    <TokenSpecimen
                      behavior="stacked"
                      name={listItem.name}
                      value={listItem.value}
                      variant="typography-body"
                      inlineStyles={{
                        color: `var(${listItem.name})`,
                      }}
                    />
                  </GridItem>
                );
              })}
            </GridItem>
            <GridItem>
              <h3>Background</h3>
              {filterTokens(`eds-theme-color-body-background`).map(function (
                listItem,
                index,
              ) {
                return (
                  <GridItem key={'body-background-' + index}>
                    <TokenSpecimen
                      behavior="stacked"
                      name={listItem.name}
                      value={listItem.value}
                      inlineStyles={{
                        color: `var(${listItem.name})`,
                      }}
                    />
                  </GridItem>
                );
              })}
            </GridItem>
          </Grid>
        </Section>

        <Section title="Link Colors">
          <Grid>
            {filterTokens(`eds-theme-color-link`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-' + index}>
                  <TokenSpecimen
                    variant="typography-title"
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      color: `var(${listItem.name})`,
                    }}
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
                    variant="typography-title"
                    name={listItem.name}
                    value={listItem.value}
                    inlineStyles={{
                      color: `var(${listItem.name})`,
                    }}
                  />
                </GridItem>
              );
            })}
          </Grid>

          <h3>Form Input Borders</h3>
          <Grid>
            {filterTokens(`eds-theme-color-form-input-border`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'form-input-border-' + index}>
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

        <Section title="Focus ring colors">
          <h3>Focus ring colors</h3>
          <Grid>
            {filterTokens(`eds-theme-color-focus-ring`).map(function (
              listItem,
              index,
            ) {
              return (
                <GridItem key={'focus-ring-' + index}>
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

        <Section title="Highlighted text">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-text-highlight-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'text-highlight-foreground-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
            </GridItem>
            <GridItem>
              <h3>Background</h3>
              <Grid>
                {filterTokens(`eds-theme-color-text-highlight-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'text-highlight-background-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
                          name={listItem.name}
                          value={listItem.value}
                          inlineStyles={{
                            backgroundColor: `var(${listItem.name})`,
                          }}
                        />
                      </GridItem>
                    );
                  },
                )}
              </Grid>
            </GridItem>
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

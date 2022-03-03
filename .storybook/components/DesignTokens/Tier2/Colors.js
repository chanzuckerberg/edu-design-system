import React, { Component } from 'react';
import { Section, Grid, GridItem, Heading } from '../../../../src';
import { ColorList } from '../../ColorList/ColorList';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';
import tokens from '../../../data/tokens.json';

export class Tier2Colors extends Component {
  render() {
    return (
      <div>
        <Section title="Primary Colors">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-primary-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'primary-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-primary-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'primary-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-primary-border`).map(function (
                  listItem,
                  index,
                ) {
                  return (
                    <GridItem key={'primary-border-' + index}>
                      <TokenSpecimen
                        behavior="stacked"
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
            </GridItem>
          </Grid>
        </Section>

        <Section title="Neutral Subtle">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-neutral-subtle-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-subtle-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-neutral-subtle-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-subtle-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-neutral-subtle-border`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-subtle-border-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
                  },
                )}
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        <Section title="Neutral Medium">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-neutral-md-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-md-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-neutral-md-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-md-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-neutral-md-border`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-md-border-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
                  },
                )}
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        <Section title="Neutral Bold">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-neutral-bold-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-bold-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-neutral-bold-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-bold-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-neutral-bold-border`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'neutral-bold-border-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
                  },
                )}
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        <Section title="Utility Success">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-success-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-success-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-utility-success-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-success-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-success-border`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-success-border-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
                  },
                )}
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        <Section title="Utility error">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-error-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-error-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-utility-error-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-error-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-error-border`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-error-border-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
                  },
                )}
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        <Section title="Utility warning">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-warning-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-warning-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-utility-warning-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-warning-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-warning-border`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-warning-border-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
                  },
                )}
              </Grid>
            </GridItem>
          </Grid>
        </Section>

        <Section title="Utility info">
          <Grid variant="1-3up">
            <GridItem>
              <h3>Foreground</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-info-foreground`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-info-foreground-' + index}>
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
                {filterTokens(`eds-theme-color-utility-info-background`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-info-background-' + index}>
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

            <GridItem>
              <h3>Border</h3>
              <Grid>
                {filterTokens(`eds-theme-color-utility-info-border`).map(
                  function (listItem, index) {
                    return (
                      <GridItem key={'utility-info-border-' + index}>
                        <TokenSpecimen
                          behavior="stacked"
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
                  },
                )}
              </Grid>
            </GridItem>
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

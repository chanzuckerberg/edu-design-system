import React, { Component } from 'react';
import filterTokens from '../../../util/filterTokens';
import Grid from '../../Grid';
import Section from '../../Section';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1TypographyTokens extends Component {
  render() {
    return (
      <div>
        <Section title="Font Family">
          <Grid>
            {filterTokens(`eds-font-family`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      fontFamily: `var(${listItem.name})`,
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

        <Section title="Font Size">
          <Grid>
            {filterTokens(`eds-font-size`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      fontSize: `var(${listItem.name})`,
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

        <Section title="Font Weight">
          <Grid>
            {filterTokens(`eds-font-weight`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      fontWeight: `var(${listItem.name})`,
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
      </div>
    );
  }
}

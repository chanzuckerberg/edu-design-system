import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Borders extends Component {
  render() {
    return (
      <div>
        <Section title="Border Width">
          <Grid>
            {filterTokens(`eds-border-width`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
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
                </Grid.Item>
              );
            })}
          </Grid>
        </Section>

        <Section title="Border Radius">
          <Grid>
            {filterTokens(`eds-border-radius`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: 'black',
                      borderRadius: `var(${listItem.name})`,
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

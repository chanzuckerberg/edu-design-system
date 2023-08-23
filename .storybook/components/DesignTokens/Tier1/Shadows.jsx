import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Shadows extends Component {
  render() {
    return (
      <div>
        <Section title="Shadows">
          <Grid>
            {filterTokens(`eds-box-shadow-`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: '#fbfbfb',
                      boxShadow: `var(${listItem.name})`,
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

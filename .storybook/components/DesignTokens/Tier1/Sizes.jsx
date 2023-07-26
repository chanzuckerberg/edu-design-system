import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Sizes extends Component {
  render() {
    return (
      <div>
        <Section title="Base Grid Size">
          <Grid>
            {filterTokens('eds-size-base').map((listItem) => (
              <Grid.Item key={listItem.name}>
                <TokenSpecimen
                  comment="Calculated from a multiple of the base font size --eds-font-size-base"
                  inlineStyles={{
                    width: `var(${listItem.name})`,
                    height: `var(${listItem.name})`,
                    minHeight: '0',
                  }}
                  name={listItem.name}
                  value={listItem.value}
                />
              </Grid.Item>
            ))}
          </Grid>
        </Section>
        <Section title="Grid Size">
          <Grid>
            {filterTokens(`eds-size`)
              .filter((listItem) => !listItem.name.endsWith('base-unit'))
              .map(function (listItem) {
                return (
                  <Grid.Item key={listItem.name}>
                    <TokenSpecimen
                      inlineStyles={{
                        width: `var(${listItem.name})`,
                        height: `var(${listItem.name})`,
                        minHeight: '0',
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

import React, { Component } from 'react';
import Grid from '../../../../src/components/Grid';
import Section from '../../../../src/components/Section';
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
                  comment="Calculated from a multiple of the base font size"
                  inlineStyles={{
                    width: `calc(var(${listItem.name}) / 16 * 1rem)`,
                    height: `calc(var(${listItem.name}) /16 * 1rem)`,
                    minHeight: '0',
                  }}
                  name={listItem.name}
                  value={listItem.value + 'px' + ` (${listItem.value / 16}rem)`}
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
                        width: `calc(var(${listItem.name}) / 16 * 1rem)`,
                        height: `calc(var(${listItem.name}) / 16 * 1rem)`,
                        minHeight: '0',
                      }}
                      name={listItem.name}
                      value={
                        listItem.value + 'px' + ` (${listItem.value / 16}rem)`
                      }
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

import React, { Component } from 'react';
import { Section, Grid, GridItem } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier3Sizes extends Component {
  render() {
    return (
      <div>
        <Section title="Slider Size">
          <Grid>
            {filterTokens(`eds-theme-size`).map(function (listItem) {
              return (
                <GridItem key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      width: `var(${listItem.name})`,
                      height: `var(${listItem.name})`,
                      minHeight: '0',
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

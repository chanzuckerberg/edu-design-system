import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Sizes extends Component {
  render() {
    return (
      <div>
        <Section title="Size">
          <Grid>
            {filterTokens(`eds-size`).map(function (listItem) {
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

import React, {Component} from 'react';
import {Grid, GridItem, Section} from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import {TokenSpecimen} from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Layout extends Component {
  render() {
    return (
      <div>
        <Section title="Layout">
          <Grid>
            {filterTokens(`eds-l-`).map(function (listItem, index) {
              return (
                <GridItem key={'l-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      maxWidth: `var(${listItem.name})`,
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

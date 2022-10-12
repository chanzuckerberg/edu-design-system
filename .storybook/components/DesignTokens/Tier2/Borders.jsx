import React, {Component} from 'react';
import {Grid, GridItem, Section} from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import {TokenSpecimen} from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Borders extends Component {
  render() {
    return (
      <div>
        <Section title="Border Width">
          <Grid>
            {filterTokens(`eds-theme-border-width`).map(function (listItem) {
              return (
                <GridItem key={listItem.name}>
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
                </GridItem>
              );
            })}
          </Grid>
        </Section>
      </div>
    );
  }
}

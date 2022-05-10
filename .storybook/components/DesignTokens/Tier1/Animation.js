import React, { Component } from 'react';
import { Grid, GridItem, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Animation extends Component {
  render() {
    return (
      <div>
        <Section title="Animation Fade">
          <Grid>
            {filterTokens(`eds-anim-fade`).map(function (listItem, index) {
              return (
                <GridItem key={'animation-ease-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      transitionDuration: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="animation-fade"
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Animation Movement">
          <Grid>
            {filterTokens(`eds-anim-move`).map(function (listItem, index) {
              return (
                <GridItem key={'animation-ease-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      transitionDuration: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="animation-move"
                  />
                </GridItem>
              );
            })}
          </Grid>
        </Section>

        <Section title="Animation Timing Function">
          <Grid>
            {filterTokens(`eds-anim-ease`).map(function (listItem, index) {
              return (
                <GridItem key={'animation-ease-' + index}>
                  <TokenSpecimen
                    inlineStyles={{
                      transitionTimingFunction: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="animation-fade"
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

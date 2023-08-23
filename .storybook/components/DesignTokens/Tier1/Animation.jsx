import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Animation extends Component {
  render() {
    return (
      <div>
        <Section title="Animation Fade">
          <Grid>
            {filterTokens(`eds-anim-fade`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      transitionDuration: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="animation-fade"
                  />
                </Grid.Item>
              );
            })}
          </Grid>
        </Section>

        <Section title="Animation Movement">
          <Grid>
            {filterTokens(`eds-anim-move`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      transitionDuration: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="animation-move"
                  />
                </Grid.Item>
              );
            })}
          </Grid>
        </Section>

        <Section title="Animation Timing Function">
          <Grid>
            {filterTokens(`eds-anim-ease`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      transitionTimingFunction: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
                    variant="animation-fade"
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

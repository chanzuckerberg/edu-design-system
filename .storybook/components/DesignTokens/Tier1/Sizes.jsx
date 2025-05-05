import React, { Component } from 'react';
import filterTokens from '../../../util/filterTokens';
import Grid from '../../Grid';
import Section from '../../Section';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Sizes extends Component {
  render() {
    return (
      <Section
        description="When using tailwind config, these sizes can be applied to any tailwind size utility class"
        title="Grid Sizes"
      >
        <Grid>
          {filterTokens(`eds-spacing-size`)
            .filter((listItem) => !listItem.name.endsWith('base-unit'))
            .map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    comment={`Tailwind class: *-${
                      listItem.name.split('--eds-')[1]
                    }`}
                    inlineStyles={{
                      width: `calc(var(${listItem.name}) * 1px)`,
                      height: `calc(var(${listItem.name}) * 1px)`,
                      minHeight: '0',
                    }}
                    name={listItem.name}
                    value={listItem.value + 'px'}
                  />
                </Grid.Item>
              );
            })}
        </Grid>
      </Section>
    );
  }
}

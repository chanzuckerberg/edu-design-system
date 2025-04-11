import React, { Component } from 'react';
import filterTokens from '../../../util/filterTokens';
import Grid from '../../Grid';
import Section from '../../Section';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Borders extends Component {
  render() {
    return (
      <div>
        <Section title="Border Width">
          <Grid>
            {filterTokens(`eds-border-width`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: `calc(var(${listItem.name}) * 1px)`,
                      borderStyle: 'solid',
                      borderColor: 'black',
                    }}
                    name={listItem.name}
                    value={listItem.value + 'px'}
                  />
                </Grid.Item>
              );
            })}
          </Grid>
        </Section>

        <Section title="Border Radius">
          <Grid>
            {filterTokens(`eds-border-radius`).map(function (listItem) {
              const unit = listItem.name.indexOf('round') > 0 ? '%' : 'px';
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      backgroundColor: 'transparent',
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: 'black',
                      borderRadius: `calc(var(${listItem.name}) * 1${unit})`,
                    }}
                    name={listItem.name}
                    value={listItem.value + unit}
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

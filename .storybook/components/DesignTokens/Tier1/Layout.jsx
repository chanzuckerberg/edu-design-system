import React, { Component } from 'react';
import Grid from '../../../../src/components/Grid';
import Section from '../../../../src/components/Section';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier1Layout extends Component {
  render() {
    return (
      <div>
        <Section title="Layout">
          <Grid>
            {filterTokens(`eds-l-`).map(function (listItem) {
              return (
                <Grid.Item key={listItem.name}>
                  <TokenSpecimen
                    inlineStyles={{
                      maxWidth: `calc(var(${listItem.name}) / 16 * 1rem)`,
                    }}
                    name={listItem.name}
                    value={
                      listItem.value + 'px' + ` (${listItem.value / 16} rem)`
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

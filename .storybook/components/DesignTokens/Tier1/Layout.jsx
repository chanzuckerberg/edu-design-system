import React, { Component } from 'react';

import filterTokens from '../../../util/filterTokens';
import { Grid } from '../../Grid/Grid';
import { Section } from '../../Section/Section';
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
                      maxWidth: `var(${listItem.name})`,
                    }}
                    name={listItem.name}
                    value={listItem.value}
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

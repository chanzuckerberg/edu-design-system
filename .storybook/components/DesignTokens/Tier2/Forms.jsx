import React, { Component } from 'react';
import { Grid, Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { TokenSpecimen } from '../../TokenSpecimen/TokenSpecimen';

export class Tier2Forms extends Component {
  render() {
    return (
      <Section title="Form Border">
        <Grid>
          {filterTokens(`eds-theme-form-border-width`).map((listItem) => (
            <Grid.Item key={listItem.name}>
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
            </Grid.Item>
          ))}

          {filterTokens(`eds-theme-form-border-radius`).map((listItem) => (
            <Grid.Item key={listItem.name}>
              <TokenSpecimen
                inlineStyles={{
                  backgroundColor: 'transparent',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderRadius: `var(${listItem.name})`,
                }}
                name={listItem.name}
                value={listItem.value}
              />
            </Grid.Item>
          ))}
        </Grid>
      </Section>
    );
  }
}

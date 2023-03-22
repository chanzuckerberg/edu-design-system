import React, { Component } from 'react';
import { Grid } from '../../../src';
import { TokenSpecimen } from '../TokenSpecimen/TokenSpecimen';

type ListItem = {
  name: string;
  value: any;
};

type Props = {
  listItems: ListItem[];
};

export class ColorList extends Component<Props> {
  render() {
    return (
      <Grid>
        {this.props.listItems.map(function (listItem) {
          return (
            <TokenSpecimen
              inlineStyles={{
                backgroundColor: `var(${listItem.name})`,
              }}
              key={listItem.name}
              name={listItem.name}
              value={listItem.value}
            />
          );
        })}
      </Grid>
    );
  }
}

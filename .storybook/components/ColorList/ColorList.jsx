import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid } from '../../../src';
import { TokenSpecimen } from '../TokenSpecimen/TokenSpecimen';

export class ColorList extends Component {
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

ColorList.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ).isRequired,
};

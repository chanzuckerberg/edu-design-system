import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid } from '../../../src';
import { TokenSpecimen } from '../TokenSpecimen/TokenSpecimen';

export class ColorList extends Component {
  render() {
    return (
      <Grid>
        {this.props.listItems.map(function (listItem, index) {
          return (
            <TokenSpecimen
              name={listItem.name}
              key={index}
              value={listItem.value}
              inlineStyles={{
                backgroundColor: `var(${listItem.name})`,
              }}
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
      comment: PropTypes.string,
    }),
  ).isRequired,
};

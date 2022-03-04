import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class FontFamilies extends Component {
  render() {
    return (
      <ul>
        {this.props.listItems.map(function (listItem) {
          return (
            <li
              key={listItem.value}
              style={{ fontFamily: `var(${listItem.name})` }}
            >
              {listItem.name}: {listItem.value}
            </li>
          );
        })}
      </ul>
    );
  }
}

FontFamilies.propTypes = {
  listItems: PropTypes.array,
};

FontFamilies.defaultProps = {
  listItems: [
    {
      name: '$font-family-primary',
      value: 'HelveticaNeue", "Helvetica", "Arial", sans-serif',
    },
  ],
};

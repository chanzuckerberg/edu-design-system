import React, { Component } from 'react';

type ListItem = {
  name: string;
  value: any;
};

type Props = {
  listItems: ListItem[];
};

export class FontFamilies extends Component<Props> {
  static defaultProps = {
    listItems: [
      {
        name: '$font-family-primary',
        value: 'HelveticaNeue", "Helvetica", "Arial", sans-serif',
      },
    ],
  };

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

import React, { Component } from 'react';

type ListItem = {
  name: string;
  value: any;
};

type Props = {
  listItems: ListItem[];
};

export class FontSizes extends Component<Props> {
  render() {
    return (
      <ul>
        {this.props.listItems.map(function (listItem) {
          return (
            <li
              key={listItem.value}
              style={{ fontSize: `var(${listItem.name})` }}
            >
              {listItem.name}: {listItem.value}
            </li>
          );
        })}
      </ul>
    );
  }
}

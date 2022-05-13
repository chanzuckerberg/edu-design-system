import React from 'react';
import { Icon } from '../../../src/components/Icon/Icon';
import './IconGrid.css';

// eslint-disable-next-line no-undef
const ALL_ICONS = require
  .context('../../../src/icons', false, /\.svg$/)
  .keys()
  .map((path) => ({ name: path.match(/([\w\s-]*)\.svg$/)[1] }));

class IconGrid extends React.Component {
  render() {
    return (
      <div>
        <ul className="icon-grid">
          {ALL_ICONS.map(function (item, index) {
            return (
              <li className="icon-grid__item" key={`icon-grid-item-${index}`}>
                <Icon name={item.name} />
                <span className="icon-grid__text">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default IconGrid;

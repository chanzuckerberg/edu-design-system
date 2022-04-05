import React from 'react';
import { Icon } from '../../../src/components/Icon/Icon';
import { ALL_ICONS } from '../../../src/util/allIcons';
import './IconGrid.css';

class IconGrid extends React.Component {
  render() {
    return (
      <div>
        <ul className="icon-grid">
          {ALL_ICONS.map((name, index) => {
            return (
              <li className="icon-grid__item" key={`icon-grid-item-${index}`}>
                <Icon name={name} />
                <span className="icon-grid__text">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default IconGrid;

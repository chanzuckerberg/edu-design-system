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
                <Icon className="icon-grid__icon" name={name} />
                <span className="icon-grid__text">{name}</span>
                {name === 'warning' && (
                  <div className="icon-grid__deprecation">
                    <Icon
                      size="0.875rem"
                      className="icon-grid__deprecation-icon"
                      name="status-error"
                      purpose="decorative"
                    />
                    This has been replaced by status-warning. This will be
                    deprecated
                  </div>
                )}
                {name === 'check-circle' && (
                  <div className="icon-grid__deprecation">
                    <Icon
                      size="0.875rem"
                      className="icon-grid__deprecation-icon"
                      name="status-error"
                      purpose="decorative"
                    />
                    This has been replaced by status-check-circle. This will be
                    deprecated
                  </div>
                )}
                {name === 'info' && (
                  <div className="icon-grid__deprecation">
                    <Icon
                      size="0.875rem"
                      className="icon-grid__deprecation-icon"
                      name="status-error"
                      purpose="decorative"
                    />
                    This has been replaced by status-info. This will be
                    deprecated
                  </div>
                )}
                {name === 'error' && (
                  <div className="icon-grid__deprecation">
                    <Icon
                      className="icon-grid__deprecation-icon"
                      name="status-error"
                      purpose="decorative"
                    />
                    This has been replaced by status-error. This will be
                    deprecated
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default IconGrid;

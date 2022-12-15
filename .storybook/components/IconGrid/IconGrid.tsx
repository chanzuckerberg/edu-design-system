import React from 'react';
import { Icon } from '../../../src/components/Icon/Icon';
import icons, { type IconName } from '../../../src/icons/spritemap';
import './IconGrid.css';

/**
 * Grid of all the available icons.
 */
const IconGrid = () => (
  <div>
    <ul className="icon-grid">
      {(Object.keys(icons) as IconName[]).map((name) => {
        return (
          <li className="icon-grid__item" key={name}>
            <Icon
              className="icon-grid__icon"
              name={name}
              purpose="decorative"
            />
            <span className="icon-grid__text">{name}</span>
            {name === 'warning' && (
              <div className="icon-grid__deprecation">
                <Icon
                  className="icon-grid__deprecation-icon"
                  name="status-error"
                  purpose="decorative"
                  size="0.875rem"
                />
                This has been replaced by status-warning. This will be
                deprecated
              </div>
            )}
            {name === 'check-circle' && (
              <div className="icon-grid__deprecation">
                <Icon
                  className="icon-grid__deprecation-icon"
                  name="status-error"
                  purpose="decorative"
                  size="0.875rem"
                />
                This has been replaced by status-check-circle. This will be
                deprecated
              </div>
            )}
            {name === 'info' && (
              <div className="icon-grid__deprecation">
                <Icon
                  className="icon-grid__deprecation-icon"
                  name="status-error"
                  purpose="decorative"
                  size="0.875rem"
                />
                This has been replaced by status-info. This will be deprecated
              </div>
            )}
            {(name === 'error' || name === 'error-inverted') && (
              <div className="icon-grid__deprecation">
                <Icon
                  className="icon-grid__deprecation-icon"
                  name="status-error"
                  purpose="decorative"
                />
                This has been replaced by status-error. This will be deprecated
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

// TODO: not sure why this is failing the lint check when it has associated story file
// eslint-disable-next-line @chanzuckerberg/stories/no-components-without-story
export default IconGrid;

import React from 'react';
import FiltersDrawer from '../../../src/components/FiltersDrawer';
import {
  FiltersPopover,
  FiltersPopoverProps,
} from '../../../src/components/FiltersPopover/FiltersPopover';

type Props = {
  /**
   * Filters component to render.
   */
  as?: 'FiltersDrawer' | 'FiltersPopover';
  /**
   * Popover placement options relative to the filters trigger button.
   */
  placement?: FiltersPopoverProps['placement'];
} & FiltersPopoverProps;

/**
 * Primary UI component for user interaction
 */
export const Filters = ({ as, placement, ...other }: Props) => {
  return (
    <div>
      {as === 'FiltersDrawer' && <FiltersDrawer {...other} />}
      {as === 'FiltersPopover' && (
        <FiltersPopover placement={placement} {...other} />
      )}
    </div>
  );
};

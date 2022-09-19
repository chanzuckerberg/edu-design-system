import React, { useEffect, useState } from 'react';
import FiltersDrawer from '../../../src/components/FiltersDrawer';
import {
  FiltersPopover,
  FiltersPopoverProps,
} from '../../../src/components/FiltersPopover/FiltersPopover';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';
type Props = {
  /**
   * Popover placement options relative to the filters trigger button.
   */
  placement?: FiltersPopoverProps['placement'];
} & FiltersPopoverProps;

/**
 * Demonstrates usage of both FiltersPopover and FiltersDrawer depending on screensize.
 */
export const Filters = ({ placement, ...other }: Props) => {
  const [isLarge, setIsLarge] = useState(false);
  const popoverBreakpoint = parseInt(breakpoint['eds-bp-md']) * 16; /* 1 */
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  });

  const updateScreenSize = () => {
    if (window.innerWidth >= popoverBreakpoint) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };
  return (
    <div>
      {!isLarge && <FiltersDrawer {...other} />}
      {isLarge && <FiltersPopover placement={placement} {...other} />}
    </div>
  );
};

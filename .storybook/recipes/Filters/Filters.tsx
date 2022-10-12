import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import FiltersDrawer from '../../../src/components/FiltersDrawer';
import type { FiltersPopoverProps } from '../../../src/components/FiltersPopover/FiltersPopover';
import { FiltersPopover } from '../../../src/components/FiltersPopover/FiltersPopover';

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
  const popoverBreakpoint = parseInt(breakpoint['eds-bp-md'], 10) * 16;

  // FIXME
  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  });

  const updateScreenSize = debounce(() => {
    if (window.innerWidth >= popoverBreakpoint && !isLarge) {
      setIsLarge(true);
    }
    if (window.innerWidth < popoverBreakpoint && isLarge) {
      setIsLarge(false);
    }
  }, 200);
  return (
    <div>
      {!isLarge && <FiltersDrawer {...other} />}
      {isLarge && <FiltersPopover placement={placement} {...other} />}
    </div>
  );
};

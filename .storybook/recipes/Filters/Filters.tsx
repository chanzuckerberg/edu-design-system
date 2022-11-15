import debounce from 'lodash.debounce';
import React, { useEffect, useState } from 'react';
import Checkbox from '../../../src/components/Checkbox';
import FiltersCheckboxField from '../../../src/components/FiltersCheckboxField';
import FiltersDrawer from '../../../src/components/FiltersDrawer';
import { FiltersPopover } from '../../../src/components/FiltersPopover/FiltersPopover';

import breakpoint from '../../../src/design-tokens/tier-1-definitions/breakpoints';

/**
 * Demonstrates usage of both FiltersPopover and FiltersDrawer depending on screensize.
 */
export const Filters = ({ ...other }) => {
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

  const initialCheckedState = [false, false, false];
  const [checked, setChecked] = useState(initialCheckedState);

  const onCheckboxChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !checked[index];
    setChecked(newChecked);
  };

  /**
   * Counts how many filters have been applied.
   */
  const filterCount = Object.values(checked).reduce((count: number, status) => {
    if (status) return count + 1;
    else return count;
  }, 0);

  const hasSelectedFilters = filterCount > 0;
  const triggerText = hasSelectedFilters
    ? `Filters (${filterCount})`
    : 'Filters';

  const checkboxes = (
    <FiltersCheckboxField legend="Filters Segment 1">
      <Checkbox
        checked={checked[0]}
        label="Filters label 1"
        onChange={() => onCheckboxChange(0)}
      />
      <Checkbox
        checked={checked[1]}
        label="Filters label 2"
        onChange={() => onCheckboxChange(1)}
      />
      <Checkbox
        checked={checked[2]}
        label="Filters label 3"
        onChange={() => onCheckboxChange(2)}
      />
    </FiltersCheckboxField>
  );

  const sharedProps = {
    hasSelectedFilters,
    triggerText,
    children: checkboxes,
  };

  return (
    <div>
      {!isLarge && <FiltersDrawer {...sharedProps} {...other} />}
      {isLarge && (
        <FiltersPopover placement="bottom-start" {...sharedProps} {...other} />
      )}
    </div>
  );
};

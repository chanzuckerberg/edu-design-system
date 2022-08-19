import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React from 'react';

import { Filters } from './Filters';
import { Checkbox } from '../Checkbox/Checkbox';

export default {
  title: 'Organisms/Tables/Filters',
  component: Filters,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    buttonText: 'Filters',
    buttonStatusVariant: 'neutral',
    children: (
      <Filters.FiltersCheckboxField legend="Filters Segment 1">
        <Checkbox
          label="Filters label 1"
          onChange={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
        />
        <Checkbox
          label="Filters label 2"
          onChange={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
        />
        <Checkbox
          label="Filters label 3"
          onChange={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
        />
      </Filters.FiltersCheckboxField>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const Default: StoryObj<Args> = {
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the drawer as well as the button, but don't want the drawer open initally outside Chromatic
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      filtersTrigger.click();
    }
  },
};

const OverflowCheckboxFields = () => {
  const initialCheckedState = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [transientChecked, setTransientChecked] =
    React.useState(initialCheckedState);
  const onCheckboxChange = (index: number) => {
    const newTransientChecked = [...transientChecked];
    newTransientChecked[index] = !transientChecked[index];
    setTransientChecked(newTransientChecked);
  };

  const [appliedChecked, setAppliedChecked] =
    React.useState(initialCheckedState);
  const onClear = () => {
    setTransientChecked(initialCheckedState);
    setAppliedChecked(initialCheckedState);
  };
  const onClose = () => {
    setTransientChecked([...appliedChecked]);
  };
  const onApply = () => {
    setAppliedChecked([...transientChecked]);
  };

  /**
   * Counts how many filters have been applied.
   */
  const filterCount = Object.values(appliedChecked).reduce(
    (count: number, status) => {
      if (status) return count + 1;
      else return count;
    },
    0,
  );

  const hasFilters = filterCount > 0;
  const buttonStatusVariant = hasFilters ? 'brand' : 'neutral';
  const buttonText = hasFilters ? `Filters (${filterCount})` : 'Filters';

  return (
    <Filters
      buttonStatusVariant={buttonStatusVariant}
      buttonText={buttonText}
      onApply={onApply}
      onClear={onClear}
      onClose={onClose}
    >
      <Filters.FiltersCheckboxField legend="Filters Segment 1">
        <Checkbox
          checked={transientChecked[0]}
          label="Filters long label 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          onChange={() => onCheckboxChange(0)}
        />
        <Checkbox
          checked={transientChecked[1]}
          label="Filters label 2"
          onChange={() => onCheckboxChange(1)}
        />
        <Checkbox
          checked={transientChecked[2]}
          label="Filters label 3"
          onChange={() => onCheckboxChange(2)}
        />
      </Filters.FiltersCheckboxField>
      <Filters.FiltersCheckboxField legend="Filters Segment 2">
        <Checkbox
          checked={transientChecked[3]}
          label="Filters label 1"
          onChange={() => onCheckboxChange(3)}
        />
        <Checkbox
          checked={transientChecked[4]}
          label="Filters long label 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          onChange={() => onCheckboxChange(4)}
        />
        <Checkbox
          checked={transientChecked[5]}
          label="Filters label 3"
          onChange={() => onCheckboxChange(5)}
        />
      </Filters.FiltersCheckboxField>
      <Filters.FiltersCheckboxField legend="Filters Segment 3">
        <Checkbox
          checked={transientChecked[6]}
          label="Filters label 1"
          onChange={() => onCheckboxChange(6)}
        />
        <Checkbox
          checked={transientChecked[7]}
          label="Filters label 2"
          onChange={() => onCheckboxChange(7)}
        />
        <Checkbox
          checked={transientChecked[8]}
          label="Filters long label 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          onChange={() => onCheckboxChange(8)}
        />
      </Filters.FiltersCheckboxField>
      <Filters.FiltersCheckboxField legend="Filters Segment 4">
        <Checkbox
          checked={transientChecked[9]}
          label="Filters label 1"
          onChange={() => onCheckboxChange(9)}
        />
        <Checkbox
          checked={transientChecked[10]}
          label="Filters label 2"
          onChange={() => onCheckboxChange(10)}
        />
        <Checkbox
          checked={transientChecked[11]}
          label="Filters label 3"
          onChange={() => onCheckboxChange(11)}
        />
        <Checkbox
          checked={transientChecked[12]}
          label="Filters label 4"
          onChange={() => onCheckboxChange(12)}
        />
        <Checkbox
          checked={transientChecked[13]}
          label="Filters label 5"
          onChange={() => onCheckboxChange(13)}
        />
        <Checkbox
          checked={transientChecked[14]}
          label="Filters label 6"
          onChange={() => onCheckboxChange(14)}
        />
      </Filters.FiltersCheckboxField>
    </Filters>
  );
};

export const OverflowInteractive: StoryObj<Args> = {
  render: () => <OverflowCheckboxFields />,
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the drawer as well as the button, but don't want the drawer open initally outside Chromatic
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      filtersTrigger.click();
    }
  },
};

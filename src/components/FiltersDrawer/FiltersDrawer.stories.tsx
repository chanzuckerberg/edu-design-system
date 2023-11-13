import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React from 'react';

import { FiltersDrawer } from './FiltersDrawer';
import { Checkbox } from '../Checkbox/Checkbox';
import { FiltersCheckboxField } from '../FiltersCheckboxField/FiltersCheckboxField';
import styles from './FiltersDrawer.stories.module.css';

export default {
  title: 'Components/FiltersDrawer',
  component: FiltersDrawer,
  parameters: {
    badges: ['1.1', BADGE.DEPRECATED],
  },
  args: {
    triggerText: 'Filters',
    hasSelectedFilters: false,
    children: (
      <FiltersCheckboxField legend="Filters Segment 1">
        <Checkbox label="Filters label 1" onChange={() => {}} />
        <Checkbox label="Filters label 2" onChange={() => {}} />
        <Checkbox label="Filters label 3" onChange={() => {}} />
      </FiltersCheckboxField>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0.25rem', height: '100vh' }}>{Story()}</div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof FiltersDrawer>;

export const Default: StoryObj<Args> = {
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the drawer as well as the button, but don't want the drawer open initally outside Chromatic
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  },
};

export const WithOnClear: StoryObj<Args> = {
  ...Default,
  args: {
    onClear: () => {},
  },
};

export const WithOnApplyAndCustomButtonGroup: StoryObj<Args> = {
  ...Default,
  args: {
    footerButtonGroupClassName: styles['button-group__apply-only'],
    onApply: () => {},
  },
};

export const OverflowInteractive: StoryObj<Args> = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  render: () => {
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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useState(initialCheckedState);
    const onCheckboxChange = (index: number) => {
      const newTransientChecked = [...transientChecked];
      newTransientChecked[index] = !transientChecked[index];
      setTransientChecked(newTransientChecked);
    };

    const [appliedChecked, setAppliedChecked] =
      // eslint-disable-next-line react-hooks/rules-of-hooks
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

    const hasSelectedFilters = filterCount > 0;
    const triggerText = hasSelectedFilters
      ? `Filters (${filterCount})`
      : 'Filters';

    return (
      <FiltersDrawer
        className={styles['filters-drawer']}
        hasSelectedFilters={hasSelectedFilters}
        onApply={onApply}
        onClear={onClear}
        onClose={onClose}
        triggerText={triggerText}
      >
        <FiltersCheckboxField legend="Filters Segment 1">
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
        </FiltersCheckboxField>
        <FiltersCheckboxField legend="Filters Segment 2">
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
        </FiltersCheckboxField>
        <FiltersCheckboxField legend="Filters Segment 3">
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
        </FiltersCheckboxField>
        <FiltersCheckboxField legend="Filters Segment 4">
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
        </FiltersCheckboxField>
      </FiltersDrawer>
    );
  },
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the drawer as well as the button, but don't want the drawer open initally outside Chromatic
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      await userEvent.click(filtersTrigger);
    }
  },
};

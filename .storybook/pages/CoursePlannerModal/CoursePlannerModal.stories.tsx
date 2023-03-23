import type { StoryObj } from '@storybook/react';
import React from 'react';

import { ModalBrand } from './ModalBrand';
import { ModalFinalStep } from './ModalFinalStep';
import { ModalFirstStep } from './ModalFirstStep';

export default {
  title: 'Pages/Course Planner/Modal',
};

export const FirstStep: StoryObj = {
  render: () => <ModalFirstStep />,
};

export const Brand: StoryObj = {
  render: () => <ModalBrand />,
};

export const FinalStep: StoryObj = {
  render: () => <ModalFinalStep />,
  parameters: {
    axe: {
      /**
       * Axe testing is flaky here, but is tested across the other modal stories and would be testing Headless Dialog functionality anyways.
       */
      disabledRules: ['aria-dialog-name'],
    },
  },
};

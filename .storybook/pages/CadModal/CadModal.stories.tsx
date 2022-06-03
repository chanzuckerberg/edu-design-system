import { StoryObj } from '@storybook/react';
import React from 'react';

import { ModalBrand } from './ModalBrand';
import { ModalFirstStep } from './ModalFirstStep';

export default {
  title: 'Pages/CAD/CadModal',
};

export const FirstStep: StoryObj = {
  render: () => <ModalFirstStep />,
};

export const Brand: StoryObj = {
  render: () => <ModalBrand />,
};

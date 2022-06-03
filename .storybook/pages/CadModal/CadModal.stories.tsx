import { StoryObj } from '@storybook/react';
import React from 'react';

import { ModalFirstStep } from './ModalFirstStep';

export default {
  title: 'Pages/CadModal',
};

export const Default: StoryObj = {
  render: () => <ModalFirstStep />,
};

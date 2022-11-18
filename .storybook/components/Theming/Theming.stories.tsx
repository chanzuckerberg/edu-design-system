import type { StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import ThemingDocs from '../../../docs/THEMING.md';
import { LayoutContainer } from '../../../src/components/LayoutContainer/LayoutContainer';
import { LayoutLinelengthContainer } from '../../../src/components/LayoutLinelengthContainer/LayoutLinelengthContainer';
// @ts-expect-error prism.js must be in JS
import Prism from '../Docs/prism';

export default {
  title: 'Documentation/Theming',
  component: ThemingDocs,
  parameters: {
    chromatic: { disableSnapshot: true },
    axe: {
      skip: true,
    },
  },
};

const ThemingDocumentation: React.FC = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <LayoutContainer>
      <LayoutLinelengthContainer>
        <ThemingDocs />
      </LayoutLinelengthContainer>
    </LayoutContainer>
  );
};

export const Theming: StoryObj = {
  render: () => <ThemingDocumentation />,
};

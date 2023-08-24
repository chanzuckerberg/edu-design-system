import type { StoryObj } from '@storybook/react';
import React from 'react';
import filterTokens from '../../../util/filterTokens';

import { ColorList } from '../../ColorList/ColorList';
import { Section } from '../../Section/Section';

export default {
  title: 'Design Tokens/Tier 3: Component/Colors',
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

const getListItems = ({
  filterTerm,
  figmaTokenHeader,
  tailwindClassHeader,
  getTailwindClassPrefix = (stringMatch: string) => {
    if (stringMatch.includes('background')) {
      return 'bg';
    } else if (stringMatch.includes('border')) {
      return 'border';
    } else {
      return 'text';
    }
  },
}: {
  filterTerm: string;
  figmaTokenHeader: string;
  tailwindClassHeader: string;
  getTailwindClassPrefix?: (stringMatch: string) => string;
}) =>
  filterTokens(filterTerm).map(({ name, value }) => {
    const specifier = name.slice(
      name.indexOf(filterTerm) + filterTerm.length + 1,
    );
    return {
      name,
      value,
      figmaToken: figmaTokenHeader + '/' + specifier,
      tailwindClass:
        getTailwindClassPrefix(specifier) +
        '-' +
        tailwindClassHeader +
        '-' +
        specifier,
    };
  });

export const Button: StoryObj = {
  // story is too large to be snapped
  // TODO: when button colors are more in sync with mocks, should be less colors so might fit then
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  render: () => (
    <div>
      <Section title="Button Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-button',
            figmaTokenHeader: 'button',
            tailwindClassHeader: 'button',
          })}
        />
      </Section>
    </div>
  ),
};

export const Checkbox: StoryObj = {
  render: () => (
    <div>
      <Section title="Checkbox Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-checkbox',
            figmaTokenHeader: 'checkbox',
            tailwindClassHeader: 'checkbox',
          })}
        />
      </Section>
    </div>
  ),
};

export const DataBar: StoryObj = {
  render: () => (
    <div>
      <Section title="Data Bar Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-data-bar',
            figmaTokenHeader: 'data bar',
            tailwindClassHeader: 'data-bar',
          })}
        />
      </Section>
    </div>
  ),
};

export const Form: StoryObj = {
  render: () => (
    <div>
      <Section title="Form Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-form',
            figmaTokenHeader: 'form',
            tailwindClassHeader: 'form',
          })}
        />
      </Section>
    </div>
  ),
};

export const Link: StoryObj = {
  render: () => (
    <div>
      <Section title="Link Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-link',
            figmaTokenHeader: 'link',
            tailwindClassHeader: 'link',
          })}
        />
      </Section>
    </div>
  ),
};

export const Modal: StoryObj = {
  render: () => (
    <div>
      <Section title="Modal Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-modal',
            figmaTokenHeader: 'modal',
            tailwindClassHeader: 'modal',
          })}
        />
      </Section>
    </div>
  ),
};

export const ProgressBar: StoryObj = {
  render: () => (
    <div>
      <Section title="Progress Bar Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-progress-bar',
            figmaTokenHeader: 'progress bar',
            tailwindClassHeader: 'progress-bar',
          })}
        />
      </Section>
    </div>
  ),
};

export const Toggle: StoryObj = {
  render: () => (
    <div>
      <Section title="Toggle Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-toggle',
            figmaTokenHeader: 'toggle',
            tailwindClassHeader: 'toggle',
          })}
        />
      </Section>
    </div>
  ),
};

export const FocusRing: StoryObj = {
  render: () => (
    <div>
      <Section title="Focus Ring Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-focus',
            figmaTokenHeader: 'focus',
            tailwindClassHeader: 'focus',
            getTailwindClassPrefix: () => '(outline/border)',
          })}
        />
      </Section>
    </div>
  ),
};

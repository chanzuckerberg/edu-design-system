import type { StoryObj } from '@storybook/react';
import React from 'react';

import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';
import { Section } from '../../Section/Section';

export default {
  title: 'Design Tokens/Tier 2: Usage/Colors',
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
}: {
  filterTerm: string;
  figmaTokenHeader: string;
  tailwindClassHeader: string;
}) =>
  filterTokens(filterTerm).map(({ name, value }) => {
    const specifier = name.slice(
      name.indexOf(filterTerm) + filterTerm.length + 1,
    );
    return {
      name,
      value,
      figmaToken: figmaTokenHeader + '/' + specifier,
      tailwindClass: tailwindClassHeader + '-' + specifier,
    };
  });

export const Text: StoryObj = {
  render: () => (
    <div>
      <Section title="Text Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-text',
            figmaTokenHeader: 'text',
            tailwindClassHeader: 'text',
          })}
        />
      </Section>
    </div>
  ),
};

export const Icon: StoryObj = {
  render: () => (
    <div>
      <Section title="Icon Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-icon',
            figmaTokenHeader: 'icon',
            tailwindClassHeader: 'text-icon',
          })}
        />
      </Section>
    </div>
  ),
};

export const Background: StoryObj = {
  render: () => (
    <div>
      <Section title="Background Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-background',
            figmaTokenHeader: 'background',
            tailwindClassHeader: 'bg',
          })}
        />
      </Section>
    </div>
  ),
};

export const Border: StoryObj = {
  render: () => (
    <div>
      <Section title="Border Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-border',
            figmaTokenHeader: 'border',
            tailwindClassHeader: 'border',
          })}
        />
      </Section>
    </div>
  ),
};

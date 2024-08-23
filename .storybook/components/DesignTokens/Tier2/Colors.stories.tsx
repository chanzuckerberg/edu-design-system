import type { StoryObj } from '@storybook/react';
import React from 'react';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';
import Section from '../../Section';

export default {
  title: 'Design Tokens/Tier 2: Usage/Colors',
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

const camelCaseWarning =
  'NOTE: emphasis tokens have a camelCase suffix for the emphasis (e.g., lowEmphasis)';

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

export const TextUtility: StoryObj = {
  render: () => (
    <div>
      <Section title="Text Colors (utility)">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-text-utility',
            figmaTokenHeader: 'text',
            tailwindClassHeader: 'text-utility',
          })}
        />
      </Section>
    </div>
  ),
};

export const BackgroundUtility: StoryObj = {
  render: () => (
    <div>
      <Section
        description={camelCaseWarning}
        title="Background Colors (utility)"
      >
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-background-utility',
            figmaTokenHeader: 'background',
            tailwindClassHeader: 'bg-utility',
          })}
        />
      </Section>
    </div>
  ),
};

export const BackgroundBrand: StoryObj = {
  render: () => (
    <div>
      <Section description={camelCaseWarning} title="Background Colors (brand)">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-background-brand',
            figmaTokenHeader: 'background',
            tailwindClassHeader: 'bg-brand',
          }).filter((item) => {
            // remove legacy primary tokens
            return item.name.indexOf('primary') === -1;
          })}
        />
      </Section>
    </div>
  ),
};

export const BorderUtility: StoryObj = {
  render: () => (
    <div>
      <Section description={camelCaseWarning} title="Border Colors (utility)">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-border-utility',
            figmaTokenHeader: 'border',
            tailwindClassHeader: 'border-utility',
          })}
        />
      </Section>
    </div>
  ),
};

export const BorderBrand: StoryObj = {
  render: () => (
    <div>
      <Section description={camelCaseWarning} title="Border Colors (brand)">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-border-brand',
            figmaTokenHeader: 'border',
            tailwindClassHeader: 'border-brand',
          }).filter((item) => {
            // remove legacy primary tokens
            return item.name.indexOf('primary') === -1;
          })}
        />
      </Section>
    </div>
  ),
};

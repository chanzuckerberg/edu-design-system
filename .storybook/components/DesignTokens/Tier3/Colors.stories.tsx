import type { StoryObj } from '@storybook/react';
import React from 'react';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';
import Section from '../../Section';

export default {
  title: 'Design Tokens/Tier 3: Component/Colors',
  parameters: {
    axe: {
      // For documentation purposes only
      skip: true,
    },
  },
};

const camelCaseWarning =
  'NOTE: table tokens have a camelCase suffix for the emphasis (e.g., tableRow)';

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

export const IconUtility: StoryObj = {
  render: () => (
    <div>
      <Section title="Icon Colors (utility)">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-icon-utility',
            figmaTokenHeader: 'icon',
            tailwindClassHeader: 'text-icon-utility',
          })}
        />
      </Section>
    </div>
  ),
};

// TODO: handle name formatting for tableRow tokens in figma and tailwind
export const BackgroundTable: StoryObj = {
  render: () => (
    <div>
      <Section description={camelCaseWarning} title="Background Colors (Table)">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-background-table',
            figmaTokenHeader: 'background',
            tailwindClassHeader: 'bg-table',
          })}
        />
      </Section>
    </div>
  ),
};

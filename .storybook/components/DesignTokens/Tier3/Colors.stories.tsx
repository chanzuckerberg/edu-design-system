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

    // tokens.json hyphen-separates camel case token name parts using the built-in "json/flat".
    // Examples:
    // - "table-row" => "tableRow"
    // Note that this is not a problem in the emitted tailwind config since it doesn't use tokens.json
    const updatedSpecifier = specifier.replace('row-', 'Row-');

    return {
      name,
      value,
      figmaToken: figmaTokenHeader + '/' + specifier,
      tailwindClass:
        tailwindClassHeader +
        (updatedSpecifier === specifier ? '-' + specifier : updatedSpecifier),
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

export const BackgroundTable: StoryObj = {
  render: () => (
    <div>
      <Section title="Background Colors (Table)">
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

import type { StoryObj } from '@storybook/react';
import React from 'react';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';
import Section from '../../Section';

// TODO: remove the generation of tokens.json entirely (only used for these internal pages)?

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

/**
 * Generate data for each list item row based on the contents of the tokens.json file.
 * 
 * Given:
 * - row in tokens.json like "eds-theme-color-background-utility-overlay-low-emphasis": "rgba(39, 38, 37, 0.50)",
 * - param like {
            filterTerm: 'eds-theme-color-background-utility',
            figmaTokenHeader: 'background',
            tailwindClassHeader: 'bg-utility',
          }
 * - generate content like {
            name: "eds-theme-color-background-utility-overlay-low-emphasis",
            value: "rgba(39, 38, 37, 0.50)",
            figmaToken: 'background/overlay-low-emphasis',
            tailwindClass: "bg-utility-overlay-low-emphasis"
          } 
 * @param object describing the: filter to apply to tokens.json, and prefixes for figma/tailwind
 * @returns object with information for displaying the various token formats and value
 */
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
    // trim the filter term from the full token name, along with the hyphen separator
    const specifier = name.slice(
      name.indexOf(filterTerm) + filterTerm.length + 1,
    );

    // TODO-AH: tokens.json hyphen-separates camel case token name parts. make sure we "*-emphasis" => "*Emphasis"
    // TODO-AH: this is not a problem in the emitted tailwind config since it doesn't use tokens.json
    return {
      name,
      value,
      // apply the passed in format prefix, and the separator
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
          })}
        />
      </Section>
    </div>
  ),
};

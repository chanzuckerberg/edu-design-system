import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Section } from '../../../../src';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';

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
  getTailwindClassHeader = (stringMatch: string) => {
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
  getTailwindClassHeader?: (stringMatch: string) => string;
}) =>
  filterTokens(filterTerm).map(({ name, value }) => {
    const specifier = name.slice(
      name.indexOf(filterTerm) + filterTerm.length + 1,
    );
    return {
      name,
      value,
      figmaToken: figmaTokenHeader + '/' + specifier,
      tailwindClass: getTailwindClassHeader(specifier) + '-' + specifier,
    };
  });

export const Button: StoryObj = {
  render: () => (
    <div>
      <Section title="Button Colors">
        <ColorList
          listItems={getListItems({
            filterTerm: 'eds-theme-color-button',
            figmaTokenHeader: 'button',
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
            getTailwindClassHeader: () => '"outline-focus"/"border-focus"',
          })}
        />
      </Section>
    </div>
  ),
};

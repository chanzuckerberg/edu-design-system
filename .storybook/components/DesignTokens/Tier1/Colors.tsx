import React from 'react';
import '../DesignTokens.css';
import Section from '../../../../src/components/Section';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';

export const Tier1Colors = () => {
  const getListItems = (filterTerm: string, figmaTokenHeader: string) =>
    filterTokens(filterTerm).map(({ name, value }) => ({
      name,
      value,
      figmaToken:
        figmaTokenHeader + '/' + name.slice(name.lastIndexOf('-') + 1),
    }));
  return (
    <div>
      <Section title="Brand Colors 2.0">
        <ColorList listItems={getListItems('eds-color-red', 'red')} />
        <ColorList listItems={getListItems('eds-color-orange', 'orange')} />
        <ColorList listItems={getListItems('eds-color-yellow', 'yellow')} />
        <ColorList listItems={getListItems('eds-color-green', 'green')} />
        <ColorList listItems={getListItems('eds-color-blue', 'blue')} />
        <ColorList listItems={getListItems('eds-color-pink', 'pink')} />
      </Section>
      <Section title="Neutral Colors">
        <ColorList listItems={getListItems('eds-color-neutral', 'neutral')} />
      </Section>
      <Section title="Legacy Brand Colors">
        <ColorList listItems={getListItems('eds-color-brand', 'brand-grape')} />
      </Section>
      <Section className="flex flex-col gap-3" title="Legacy Other Colors">
        <ColorList
          listItems={getListItems('eds-color-other-orange', 'orange')}
        />
        <ColorList listItems={getListItems('eds-color-other-mint', 'mint')} />
        <ColorList
          listItems={getListItems('eds-color-other-yellow', 'yellow')}
        />
        <ColorList listItems={getListItems('eds-color-other-ruby', 'ruby')} />
      </Section>
    </div>
  );
};

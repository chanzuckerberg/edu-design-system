import React from 'react';
import '../DesignTokens.css';
import { Section } from '../../../../src';
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
      <Section title="Neutral Colors">
        <ColorList listItems={getListItems('eds-color-neutral', 'neutral')} />
      </Section>
      <Section title="Brand Colors">
        <ColorList listItems={getListItems('eds-color-brand', 'brand-grape')} />
      </Section>
      <Section className="flex flex-col gap-3" title="Other Colors">
        <ColorList
          listItems={getListItems('eds-color-other-orange', 'orange')}
        />
        <ColorList listItems={getListItems('eds-color-other-mint', 'mint')} />
        <ColorList
          listItems={getListItems('eds-color-other-yellow', 'yellow')}
        />
        <ColorList listItems={getListItems('eds-color-other-ruby', 'ruby')} />
        <ColorList
          listItems={getListItems('eds-color-other-lemon', 'supporting')}
        />
      </Section>
    </div>
  );
};

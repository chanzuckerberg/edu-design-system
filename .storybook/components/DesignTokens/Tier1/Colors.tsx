import React from 'react';
import '../DesignTokens.css';
import filterTokens from '../../../util/filterTokens';
import { ColorList } from '../../ColorList/ColorList';
import Section from '../../Section';

export const Tier1Colors = () => {
  const getListItems = (filterTerm: string, figmaTokenHeader: string) =>
    filterTokens(filterTerm).map(({ name, value }) => ({
      name,
      value,
      figmaToken:
        figmaTokenHeader + '/' + name.slice(name.lastIndexOf('-') + 1),
    }));

  // filter down to the neutral tokens which were introduced or redefined in the new brand
  const nonLegacyNeutralItems = getListItems('eds-color-neutral', 'neutral');
  return (
    <div>
      <Section
        description="These base colors are used in higher tier tokens and not linked for use via Tailwind"
        title="Brand Red Colors"
      >
        <ColorList listItems={getListItems('eds-color-red', 'red')} />
      </Section>
      <Section title="Brand Orange Colors">
        <ColorList listItems={getListItems('eds-color-orange', 'orange')} />
      </Section>
      <Section title="Brand Yellow Colors">
        <ColorList listItems={getListItems('eds-color-yellow', 'yellow')} />
      </Section>
      <Section title="Brand Green Colors">
        <ColorList listItems={getListItems('eds-color-green', 'green')} />
      </Section>
      <Section title="Brand Blue Colors">
        <ColorList listItems={getListItems('eds-color-blue', 'blue')} />
      </Section>
      <Section title="Brand Purple Colors">
        <ColorList listItems={getListItems('eds-color-purple', 'purple')} />
      </Section>
      <Section title="Brand Pink Colors">
        <ColorList listItems={getListItems('eds-color-pink', 'pink')} />
      </Section>
      <Section title="Brand Neutral Colors">
        <ColorList listItems={nonLegacyNeutralItems} />
      </Section>
    </div>
  );
};
